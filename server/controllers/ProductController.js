const { ProductModel, CategoryModel } = require('../models');
const { createController } = require('../util/helpers');

const BaseController = createController(ProductModel);

class ProdcutController extends BaseController {
  static async list(req, res) {
    // Return category group info if ?populate=true
    if (req.query.populate) {
      const products = await ProductModel.find().populate('category');
      return res.json(products);
    }

    // Range query between array 0,1 postitions
    if (req.query.range) {
      const range = JSON.parse(req.query.range);
      const products = await ProductModel.find()
        .where('price')
        .gt(range[0])
        .lt(range[1]);
      return res.json(products);
    }

    const products = await ProductModel.find();
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
