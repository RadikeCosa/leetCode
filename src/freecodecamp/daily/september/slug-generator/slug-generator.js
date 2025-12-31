/**
 * FreeCodeCamp Problem: Slug Generator
 * Category: FreeCodeCamp
 *
 * @param {string} str - The input string to be converted into a slug
 * @returns {string} The URL-friendly slug version of the input string
 */
function generateSlug(str) {
  if (!str) return "";

  // 1. Lowercase
  let s = String(str).toLowerCase();

  // 2. Remove characters that are not letters, numbers or spaces
  s = s.replace(/[^a-z0-9 ]+/g, "");

  // 3. Trim and collapse consecutive spaces into one
  s = s.trim().replace(/\s+/g, " ");

  // 4. Replace spaces with URL-encoded %20
  if (s === "") return "";
  return s.replace(/ /g, "%20");
}

export default generateSlug;
