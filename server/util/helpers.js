const express = require('express');
const BaseController = require('./BaseController');

// Create controller class from model
function createController(Model) {
  class Controller extends BaseController {
    static async create(req, res) {
      const itemCreated = await Model.create(req.body);
      return res.send(itemCreated);
    }

    static async list(req, res) {
      const allItems = await Model.find();
      return res.json(allItems);
    }

    static async show(req, res) {
      const item = await Model.findById(req.params.id);
      return res.json(item);
    }
  }

  return Controller;
}

// Create router from controller
function createRouter(Controller) {
  const router = express.Router();

  router.get('/', Controller.list);
  router.get('/:id', Controller.show);
  router.post('/', Controller.create);
  router.put('/:id', Controller.update);
  router.delete('/:id', Controller.remove);

  return router;
}

module.exports = { createController, createRouter };
