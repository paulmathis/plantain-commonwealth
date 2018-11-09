const CategoryGroup = require('../models/CategoryGroupModel');

async function create(req, res) {
  const catGroup = await CategoryGroup.create(req.body);
  return res.send(catGroup);
}

module.exports = { create };
