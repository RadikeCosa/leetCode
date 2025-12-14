/**
 * FreeCodeCamp Problem: Capitalize It
 * Category: FreeCodeCamp
 *
 * @param {string} title - The string to be converted to title case
 * @returns {string} The title-cased string
 */
function titleCase(title) {
  return title
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default titleCase;
