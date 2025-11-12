/**
 * FreeCodeCamp Problem: Weekday Finder
 * Category: Daily
 */
function getWeekday(dateString) {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-US", { weekday: "long" });
}

export default getWeekday;
