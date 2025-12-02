/**
 * FreeCodeCamp Problem: Camel To Snake
 * Category: FreeCodeCamp
 *
 * @param {string} camelCaseStr - String in camelCase format
 * @returns {string} - String converted to snake_case format
 */
function toSnakeLoop(camelCaseStr) {
  let snakeCaseStr = "";
  for (let char of camelCaseStr) {
    if (char >= "A" && char <= "Z") {
      snakeCaseStr += "_" + char.toLowerCase();
    } else {
      snakeCaseStr += char;
    }
  }
  return snakeCaseStr;
}

function toSnake(camelCaseStr) {
  return camelCaseStr.replace(/([A-Z])/g, "_$1").toLowerCase();
}

export default toSnake;
