/**
 * FreeCodeCamp Problem: Resolution Streak
 * Category: FreeCodeCamp
 *
 * @param {array[]} days - An array of arrays, where each sub-array represents a day of resolution activities.
 * @returns {string} A message indicating the resolution streak status.
 */
function resolutionStreak(days) {
  // Validate top-level input: expect an array of days
  if (!Array.isArray(days)) {
    throw new TypeError("Expected an array of day arrays");
  }

  // Counter for consecutive successful days processed so far
  let successfulDays = 0;

  // Iterate through each day (0-based index i, but messages use 1-based day numbers)
  for (let i = 0; i < days.length; i++) {
    const day = days[i];

    // Each day must be an array with at least three entries
    if (!Array.isArray(day) || day.length < 3) {
      throw new TypeError(
        `Invalid day at index ${i}: expected [steps, screenTime, pagesRead]`
      );
    }

    // Convert values to numbers in case they're strings; destructure into meaningful names
    const [steps, screenTime, pagesRead] = day.map(Number);

    // Ensure converted values are finite numbers
    if (
      !Number.isFinite(steps) ||
      !Number.isFinite(screenTime) ||
      !Number.isFinite(pagesRead)
    ) {
      throw new TypeError(`Invalid numeric values on day ${i + 1}`);
    }

    // Check the three success conditions for the day:
    // - at least 10,000 steps
    // - at most 120 minutes of screen time
    // - at least 5 pages read
    if (steps >= 10000 && screenTime <= 120 && pagesRead >= 5) {
      // Day is successful: increment the streak counter and continue
      successfulDays++;
    } else {
      // First failed day: return failure message including the day number (1-based)
      // and the number of successful days before this failure
      return `Resolution failed on day ${i + 1}: ${successfulDays} day streak.`;
    }
  }

  // All days were successful: return the on-track message with total successful days
  return `Resolution on track: ${successfulDays} day streak.`;
}

export default resolutionStreak;
