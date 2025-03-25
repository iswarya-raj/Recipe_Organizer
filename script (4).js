document.getElementById('recipeForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const title = document.getElementById('title').value;
    const ingredients = document.getElementById('ingredients').value.split(',');
    const steps = document.getElementById('steps').value.split(',');
    const tags = document.getElementById('tags').value.split(',');
  
    const recipe = { title, ingredients, steps, tags };
  
    await fetch('http://localhost:5000/api/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recipe),
    });
  
    loadRecipes(); // Refresh recipe list
    e.target.reset(); // Reset the form
  });
  
  async function loadRecipes() {
    const response = await fetch('http://localhost:5000/api/recipes');
    const recipes = await response.json();
  
    const recipeContainer = document.getElementById('recipeContainer');
    recipeContainer.innerHTML = '';  // Clear the existing recipes
  
    recipes.forEach((recipe) => {
      const recipeBox = document.createElement('div');
      recipeBox.classList.add('recipe-box'); // Add styling for recipe card
  
      recipeBox.innerHTML = `
        <h3>${recipe.title}</h3>
        <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
        <p><strong>Steps:</strong> ${recipe.steps.join(', ')}</p>
        <p><strong>Tags:</strong> ${recipe.tags.join(', ')}</p>
      `;
  
      recipeContainer.appendChild(recipeBox); // Append recipe box to the container
    });
  }
  
  loadRecipes(); // Initial load of recipes
  