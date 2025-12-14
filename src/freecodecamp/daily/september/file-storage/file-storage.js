/**
 * FreeCodeCamp Problem: File Storage
 * Category: FreeCodeCamp
 *
 * @param {number} fileSize - The size of the file
 * @param {string} fileUnit - The unit of the file size ("B", "KB", "MB")
 * @param {number} driveSizeGb - The size of the hard drive in gigabytes (GB)
 * @returns {number} The number of whole files the drive can fit
 */
function numberOfFiles(fileSize, fileUnit, driveSizeGb) {
  const unitToBytes = {
    B: 1,
    KB: 1_000,
    MB: 1_000_000,
    GB: 1_000_000_000,
  };
  const fileSizeInBytes = fileSize * unitToBytes[fileUnit];
  const driveSizeInBytes = driveSizeGb * unitToBytes.GB;
  return Math.floor(driveSizeInBytes / fileSizeInBytes);
}

export default numberOfFiles;
