import favoriteSongs from "./favorite-songs.js";

/**
 * FreeCodeCamp Problem: Favorite Songs
 * Category: Daily
 *
 * Given an array of song objects representing your iPod playlist, return an array with the titles of the two most played songs, with the most played song first.
 *
 * Each object will have a "title" property (string), and a "plays" property (integer).
 *
 * Tests:
 * 1. favoriteSongs([{"title": "Sync or Swim", "plays": 3}, {"title": "Byte Me", "plays": 1}, {"title": "Earbud Blues", "plays": 2} ]) should return ["Sync or Swim", "Earbud Blues"].
 * 2. favoriteSongs([{"title": "Skip Track", "plays": 98}, {"title": "99 Downloads", "plays": 99}, {"title": "Clickwheel Love", "plays": 100} ]) should return ["Clickwheel Love", "99 Downloads"].
 * 3. favoriteSongs([{"title": "Song A", "plays": 42}, {"title": "Song B", "plays": 99}, {"title": "Song C", "plays": 75} ]) should return ["Song B", "Song C"].
 */
import { it, describe, expect } from "vitest";
import favoriteSongs from "./favorite-songs.js";

describe("Favorite Songs", () => {
  it('should return ["Sync or Swim", "Earbud Blues"] for the given playlist', () => {
    expect(
      favoriteSongs([
        { title: "Sync or Swim", plays: 3 },
        { title: "Byte Me", plays: 1 },
        { title: "Earbud Blues", plays: 2 },
      ])
    ).toEqual(["Sync or Swim", "Earbud Blues"]);
  });

  it('should return ["Clickwheel Love", "99 Downloads"] for the given playlist', () => {
    expect(
      favoriteSongs([
        { title: "Skip Track", plays: 98 },
        { title: "99 Downloads", plays: 99 },
        { title: "Clickwheel Love", plays: 100 },
      ])
    ).toEqual(["Clickwheel Love", "99 Downloads"]);
  });

  it('should return ["Song B", "Song C"] for the given playlist', () => {
    expect(
      favoriteSongs([
        { title: "Song A", plays: 42 },
        { title: "Song B", plays: 99 },
        { title: "Song C", plays: 75 },
      ])
    ).toEqual(["Song B", "Song C"]);
  });
});
