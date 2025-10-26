/**
 * FreeCodeCamp Problem: Duration Formatter
 * Category: Daily
 */
function format(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  // Format seconds with 2 digits
  const formattedSeconds = secs.toString().padStart(2, "0");
  // Build result according to rules
  if (hours > 0) {
    return `${hours}:${minutes
      .toString()
      .padStart(2, "0")}:${formattedSeconds}`;
  } else {
    return `${minutes}:${formattedSeconds}`;
  }
}

export default format;
