//Examples:
// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 

function cakes(recipe, available) {
  let maxCakes = Infinity;

  for (const ingredient in recipe) {
    if (recipe.hasOwnProperty(ingredient)) {
      if (available.hasOwnProperty(ingredient)) {
        const ratio = Math.floor(available[ingredient] / recipe[ingredient]);
        maxCakes = Math.min(maxCakes, ratio);
      } else {
        // If an ingredient required in the recipe is missing in the available ingredients
        return 0;
      }
    }
  }

  return maxCakes;
}
