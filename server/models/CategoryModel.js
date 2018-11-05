const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
  category_group: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Category_Group',
  },
});

module.exports = mongoose.model('Category', categorySchema);
