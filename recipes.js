const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// Get all recipes
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new recipe
router.post('/', async (req, res) => {
  const recipe = new Recipe({
    title: req.body.title,
    ingredients: req.body.ingredients,
    steps: req.body.steps,
    tags: req.body.tags,
  });
  try {
    const newRecipe = await recipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
