const ProductModel = require('../models/ProductModel');
const { createController } = require('../util/helpers');

module.exports = createController(ProductModel);
