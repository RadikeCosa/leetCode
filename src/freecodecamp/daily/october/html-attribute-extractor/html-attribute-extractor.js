/**
 * FreeCodeCamp Problem: HTML Attribute Extractor
 * Category: Daily
 *
 * Given a string of a valid HTML element, return the attributes of the element using the following criteria:
 *
 * - You will only be given one element.
 * - Attributes will be in the format: attribute="value".
 * - Return an array of strings with each attribute property and value, separated by a comma,
 *   in this format: ["attribute1, value1", "attribute2, value2"].
 * - Return attributes in the order they are given.
 * - If no attributes are found, return an empty array.
 *
 * @param {string} element - A string containing a valid HTML element
 * @returns {string[]} - Array of strings with attribute-value pairs
 */
function extractAttributes(element) {
  let attributes = [];
  // Regular expression to match attributes in the format attribute="value"
  const regex = /(\w+)="([^"]*)"/g;
  let match;
  // Use regex to find all attribute matches in the element string
  while ((match = regex.exec(element)) !== null) {
    attributes.push(`${match[1]}, ${match[2]}`);
  }
  return attributes;
}

export default extractAttributes;
