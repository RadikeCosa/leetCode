/**
 * FreeCodeCamp Problem: Video Storage
 * Category: Daily
 *
 * Given a video size, a unit for the video size, a hard drive capacity, and a unit for the hard drive, return the number of videos the hard drive can store using the following constraints:
 *
 * The unit for the video size can be bytes ("B"), kilobytes ("KB"), megabytes ("MB"), or gigabytes ("GB").
 * If not given one of the video units above, return "Invalid video unit".
 * The unit of the hard drive capacity can be gigabytes ("GB") or terabytes ("TB").
 * If not given one of the hard drive units above, return "Invalid drive unit".
 * Return the number of whole videos the drive can fit.
 * Use the following conversions:
 * Unit	Equivalent
 * 1 B	1 B
 * 1 KB	1000 B
 * 1 MB	1000 KB
 * 1 GB	1000 MB
 * 1 TB	1000 GB
 * For example, given 500, "MB", 100, and "GB" as arguments, determine how many 500 MB videos can fit on a 100 GB hard drive.
 *
 * Examples:
 * - numberOfVideos(500, "MB", 100, "GB") should return 200
 * - numberOfVideos(1, "TB", 10, "TB") should return "Invalid video unit"
 * - numberOfVideos(2000, "MB", 100000, "MB") should return "Invalid drive unit"
 * - numberOfVideos(500000, "KB", 2, "TB") should return 4000
 * - numberOfVideos(1.5, "GB", 2.2, "TB") should return 1466
 */

import { describe, it, expect } from "vitest";
import numberOfVideos from "./video-storage.js";

describe("Video Storage", () => {
  it('numberOfVideos(500, "MB", 100, "GB") should return 200', () => {
    expect(numberOfVideos(500, "MB", 100, "GB")).toBe(200);
  });

  it('numberOfVideos(1, "TB", 10, "TB") should return "Invalid video unit"', () => {
    expect(numberOfVideos(1, "TB", 10, "TB")).toBe("Invalid video unit");
  });

  it('numberOfVideos(2000, "MB", 100000, "MB") should return "Invalid drive unit"', () => {
    expect(numberOfVideos(2000, "MB", 100000, "MB")).toBe("Invalid drive unit");
  });

  it('numberOfVideos(500000, "KB", 2, "TB") should return 4000', () => {
    expect(numberOfVideos(500000, "KB", 2, "TB")).toBe(4000);
  });

  it('numberOfVideos(1.5, "GB", 2.2, "TB") should return 1466', () => {
    expect(numberOfVideos(1.5, "GB", 2.2, "TB")).toBe(1466);
  });
});
