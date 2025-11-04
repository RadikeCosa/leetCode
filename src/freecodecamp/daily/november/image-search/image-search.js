/**
 * FreeCodeCamp Problem: Image Search
 * Category: Daily
 */
function imageSearch(images, term) {
  if (term === undefined || term === null) {
    return [];
  }

  const regex = new RegExp(term, "i");
  return images.filter((image) => regex.test(image));
}

export default imageSearch;
