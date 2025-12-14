import numberOfFiles from "./file-storage";

/**
 File Storage
Given a file size, a unit for the file size, and hard drive capacity in gigabytes (GB), return the number of files the hard drive can store using the following constraints:

The unit for the file size can be bytes ("B"), kilobytes ("KB"), or megabytes ("MB").
Return the number of whole files the drive can fit.
Use the following conversions:
Unit	Equivalent
1 B	1 B
1 KB	1000 B
1 MB	1000 KB
1 GB	1000 MB
For example, given 500, "KB", and 1 as arguments, determine how many 500 KB files can fit on a 1 GB hard drive.

Tests
1. numberOfFiles(500, "KB", 1) should return 2000.
2. numberOfFiles(50000, "B", 1) should return 20000.
3. numberOfFiles(5, "MB", 1) should return 200.
4. numberOfFiles(4096, "B", 1.5) should return 366210.
5. numberOfFiles(220.5, "KB", 100) should return 453514.
6. numberOfFiles(4.5, "MB", 750) should return 166666
 */

describe("File Storage", () => {
  it("should return 2000 for numberOfFiles(500, 'KB', 1)", () => {
    expect(numberOfFiles(500, "KB", 1)).toBe(2000);
  });

  it("should return 20000 for numberOfFiles(50000, 'B', 1)", () => {
    expect(numberOfFiles(50000, "B", 1)).toBe(20000);
  });

  it("should return 200 for numberOfFiles(5, 'MB', 1)", () => {
    expect(numberOfFiles(5, "MB", 1)).toBe(200);
  });

  it("should return 366210 for numberOfFiles(4096, 'B', 1.5)", () => {
    expect(numberOfFiles(4096, "B", 1.5)).toBe(366210);
  });

  it("should return 453514 for numberOfFiles(220.5, 'KB', 100)", () => {
    expect(numberOfFiles(220.5, "KB", 100)).toBe(453514);
  });

  it("should return 166666 for numberOfFiles(4.5, 'MB', 750)", () => {
    expect(numberOfFiles(4.5, "MB", 750)).toBe(166666);
  });
});
