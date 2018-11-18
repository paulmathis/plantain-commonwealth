const { CategoryModel, CategoryGroupModel } = require('../models');
const { createController } = require('../util/helpers');

const BaseController = createController(CategoryModel);

class CategoryController extends BaseController {
  static async list(req, res) {
    // Return category group info if ?populate=true
    if (req.query.populate) {
      const categories = await CategoryModel.find().populate('category_group');
      return res.json(categories);
    }

    const categories = await CategoryModel.find();
    return res.json(categories);
  }

  static async create(req, res) {
    // // Create a new category
    const categoryCreated = await CategoryModel.create(req.body);

    // // Get the category group of the category
    const categoryGroup = await CategoryGroupModel.findById(req.body.category_group);

    // // Push the new product ID to the parrent category
    categoryGroup.categories.push(categoryCreated._id);

    // // Save the updated category
    await categoryGroup.save();

    return res.send(categoryCreated);
  }
}

module.exports = CategoryController;
