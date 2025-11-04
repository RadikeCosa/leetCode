/**
 * Image Search
 * On November 4th, 2001, Google launched its image search, allowing people to find images using search terms. In this challenge, you will imitate the image search.
 *
 * Given an array of image names and a search term, return an array of image names containing the search term.
 *
 * Ignore the case when matching the search terms.
 * Return the images in the same order they appear in the input array.
 *
 * Tests
 * 1. imageSearch(["dog.png", "cat.jpg", "parrot.jpeg"], "dog") should return ["dog.png"].
 * 2. imageSearch(["Sunset.jpg", "Beach.png", "sunflower.jpeg"], "sun") should return ["Sunset.jpg", "sunflower.jpeg"].
 * 3. imageSearch(["Moon.png", "sun.jpeg", "stars.png"], "PNG") should return ["Moon.png", "stars.png"].
 * 4. imageSearch(["cat.jpg", "dogToy.jpeg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"], "Cat") should return ["cat.jpg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"].
 */
import imageSearch from "./image-search.js";
import { describe, expect, it } from "vitest";
describe("Image Search", () => {
  it("should return ['dog.png'] for search term 'dog'", () => {
    expect(imageSearch(["dog.png", "cat.jpg", "parrot.jpeg"], "dog")).toEqual([
      "dog.png",
    ]);
  });

  it("should return ['Sunset.jpg', 'sunflower.jpeg'] for search term 'sun'", () => {
    expect(
      imageSearch(["Sunset.jpg", "Beach.png", "sunflower.jpeg"], "sun")
    ).toEqual(["Sunset.jpg", "sunflower.jpeg"]);
  });

  it("should return ['Moon.png', 'stars.png'] for search term 'PNG'", () => {
    expect(imageSearch(["Moon.png", "sun.jpeg", "stars.png"], "PNG")).toEqual([
      "Moon.png",
      "stars.png",
    ]);
  });

  it("should return ['cat.jpg', 'kitty-cat.png', 'catNip.jpeg', 'franken_cat.gif'] for search term 'Cat'", () => {
    expect(
      imageSearch(
        [
          "cat.jpg",
          "dogToy.jpeg",
          "kitty-cat.png",
          "catNip.jpeg",
          "franken_cat.gif",
        ],
        "Cat"
      )
    ).toEqual(["cat.jpg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"]);
  });
});
