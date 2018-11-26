const flatten = require('lodash/flatten');
const { ProductModel, CategoryModel, CategoryGroupModel } = require('../models');
const { createController } = require('../util/helpers');

const BaseController = createController(ProductModel);

class ProdcutController extends BaseController {
  static async list(req, res) {
    // Object that can be filled with specific queiries
    const match = {};

    // Add price range to match object
    if (req.query.range) {
      const range = JSON.parse(req.query.range);
      match.price = { $gt: range[0], $lt: range[1] };
    }

    // Return category group info if ?populate=true
    if (req.query.populate) {
      const products = await ProductModel.find(match).populate('category');
      return res.json(products);
    }

    // Find all products by category group id
    if (req.query.group) {
      const { group } = req.query;

      // Populate out from group to the products
      const tree = await CategoryGroupModel.findById(group)
        .select('categories')
        .populate({
          path: 'categories',
          select: 'products',
          populate: { path: 'products', match },
        });

      // Pull out an array of products for each category
      const productArrays = tree.categories.map(category => category.products);

      // Flatten the arrays into one array and return
      return res.json(flatten(productArrays));
    }

    const products = await ProductModel.find(match);
    return res.json(products);
  }

  static async create(req, res) {
    // Get the category of the product
    const category = await CategoryModel.findById(req.body.category).populate('category_group');

    // Generate path to asset location
    const assetPath = `/assets/products/${category.category_group.name.toLowerCase()}/${category.name.toLowerCase()}/${
      req.body.image
    }`;

    // Create a new product
    const productCreated = await ProductModel.create({ ...req.body, image: assetPath });

    // Push the new product ID to the parrent category
    category.products.push(productCreated._id);

    // Save the updated category
    await category.save();

    return res.send(productCreated);
  }
}

module.exports = ProdcutController;
