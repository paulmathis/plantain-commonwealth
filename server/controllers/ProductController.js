const BaseController = require('./BaseController');
const Product = require('../models/ProductModel');

class ProductController extends BaseController {
  static async list(req, res) {
    const products = await Product.find();
    return res.json(products);
  }
}

module.exports = ProductController;
