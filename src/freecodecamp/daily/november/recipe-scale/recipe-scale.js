/**
 * FreeCodeCamp Problem: Recipe Scale
 * Category: FreeCodeCamp
 *
 * @param {string[]} ingredients - Array of ingredient strings in the format "quantity unit ingredient"
 * @param {number} scale - The factor by which to scale the recipe
 * @returns {string[]} - Array of scaled ingredient strings
 */
function scaleRecipe(ingredients, scale) {
  for (let i = 0; i < ingredients.length; i++) {
    const [quantity, unit, ...ingredientParts] = ingredients[i].split(" ");
    const ingredient = ingredientParts.join(" ");
    const scaledQuantity = parseFloat(quantity) * scale;
    ingredients[i] = `${scaledQuantity} ${unit} ${ingredient}`;
  }
  return ingredients;
}

export default scaleRecipe;
