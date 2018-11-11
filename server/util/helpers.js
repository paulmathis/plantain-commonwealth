const express = require('express');

function createRouter(Controller) {
  const router = express.Router();

  router.get('/', Controller.list);
  router.get('/:id', Controller.show);
  router.post('/', Controller.create);
  router.put('/:id', Controller.update);
  router.delete('/:id', Controller.remove);

  return router;
}

module.exports = { createRouter };
