/**
 * FreeCodeCamp Problem: Image Search
 * Category: Daily
 */
function imageSearch(images, term) {
  if (!Array.isArray(images) || typeof term !== "string") {
    return [];
  }

  const lowerTerm = term.toLowerCase();
  return images.filter(
    (image) =>
      typeof image === "string" && image.toLowerCase().includes(lowerTerm)
  );
}

export default imageSearch;
