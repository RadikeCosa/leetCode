/**
 * FreeCodeCamp Problem: Days Until Weekend
 * Category: FreeCodeCamp
 *
 * @param {string} dateString - A date string in the format "YYYY-MM-DD"
 * @returns {string} A message indicating the number of days until the weekend or if it's the weekend
 */
function daysUntilWeekend(dateString) {
  const date = new Date(dateString);
  const dayOfWeek = date.getUTCDay();

  if (dayOfWeek === 6 || dayOfWeek === 0) {
    return "It's the weekend!";
  }

  const daysUntilSaturday = 6 - dayOfWeek;
  return daysUntilSaturday === 1
    ? "1 day until the weekend."
    : `${daysUntilSaturday} days until the weekend.`;
}

export default daysUntilWeekend;
