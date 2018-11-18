const { ProductModel, CategoryModel } = require('../models');
const { createController } = require('../util/helpers');

const BaseController = createController(ProductModel);

class ProdcutController extends BaseController {
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
