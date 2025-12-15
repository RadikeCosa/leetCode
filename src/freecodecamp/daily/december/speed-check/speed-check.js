/**
 * FreeCodeCamp Problem: Speed Check
 * Category: FreeCodeCamp
 *
 * @param {number} speedMph - The speed you are traveling in miles per hour (MPH)
 * @param {number} speedLimitKph - The speed limit in kilometers per hour (KPH)
 * @returns {string} A string indicating whether you are "Not Speeding", "Warning", or "Ticket"
 */
function speedCheck(speedMph, speedLimitKph) {
  const speedKPH = speedMph * 1.60934;
  if (speedKPH <= speedLimitKph) {
    return "Not Speeding";
  } else if (speedKPH <= speedLimitKph + 5) {
    return "Warning";
  } else {
    return "Ticket";
  }
}

export default speedCheck;
