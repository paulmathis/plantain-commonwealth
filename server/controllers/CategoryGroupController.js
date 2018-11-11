const BaseController = require('./BaseController');
const CategoryGroup = require('../models/CategoryGroupModel');

class CategoryGroupController extends BaseController {
  static async create(req, res) {
    const catGroup = await CategoryGroup.create(req.body);
    return res.send(catGroup);
  }
}

module.exports = CategoryGroupController;
