/**
 * FreeCodeCamp Problem: Photo Storage
 * Category: FreeCodeCamp
 *
 * @param {number} photoSizeMb - Size of a single photo in megabytes (MB)
 * @param {number} hardDriveSizeGb - Size of the hard drive in gigabytes (GB)
 * @returns {number} Number of whole photos that can be stored on the hard drive
 */
function numberOfPhotos(photoSizeMb, hardDriveSizeGb) {
  if (photoSizeMb <= 0) return 0;
  const totalMb = hardDriveSizeGb * 1000;
  return Math.floor(totalMb / photoSizeMb);
}

export default numberOfPhotos;
