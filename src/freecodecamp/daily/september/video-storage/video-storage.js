/**
 * FreeCodeCamp Problem: Video Storage
 * Category: Daily
 */
function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {
  const validVideoUnits = ["B", "KB", "MB", "GB"];
  const validDriveUnits = ["GB", "TB"];

  if (!validVideoUnits.includes(videoUnit)) {
    return "Invalid video unit";
  }

  if (!validDriveUnits.includes(driveUnit)) {
    return "Invalid drive unit";
  }

  const unitToBytes = {
    B: 1,
    KB: 1000,
    MB: 1000000,
    GB: 1000000000,
    TB: 1000000000000,
  };

  const videoBytes = videoSize * unitToBytes[videoUnit];
  const driveBytes = driveSize * unitToBytes[driveUnit];
  return Math.floor(driveBytes / videoBytes);
}

export default numberOfVideos;
