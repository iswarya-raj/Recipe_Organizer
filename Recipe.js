const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: [String],
  steps: [String],
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Recipe', recipeSchema);
