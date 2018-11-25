const CategoryGroupModel = require('../models/CategoryGroupModel');
const { createController } = require('../util/helpers');

const BaseController = createController(CategoryGroupModel);

class CategoryGroupController extends BaseController {
  static async show(req, res) {
    // Return category group info if ?populate=true
    if (req.query.populate) {
      const products = await CategoryGroupModel.findById(req.params.id).populate('categories');
      return res.json(products);
    }

    const products = await CategoryGroupModel.findById(req.params.id);
    return res.json(products);
  }
}

module.exports = CategoryGroupController;
