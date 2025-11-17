/**
 * FreeCodeCamp Problem: Count Rectangles
 * Category: FreeCodeCamp
 *
 * @param {number} width - The width of the rectangle
 * @param {number} height - The height of the rectangle
 * @returns {number} The total number of axis-aligned rectangles with integer dimensions inside the given rectangle
 */
function countRectangles(width, height) {
  // The number of ways to choose 2 vertical lines from (width + 1) lines is C(width + 1, 2)
  // The number of ways to choose 2 horizontal lines from (height + 1) lines is C(height + 1, 2)
  // The total number of rectangles is the product of these two combinations
  return ((width * (width + 1)) / 2) * ((height * (height + 1)) / 2);
}

export default countRectangles;
