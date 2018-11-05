const mongoose = require('mongoose');

const categoryGroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Category',
    },
  ],
});

module.exports = mongoose.model('Category_Group', categoryGroupSchema);
