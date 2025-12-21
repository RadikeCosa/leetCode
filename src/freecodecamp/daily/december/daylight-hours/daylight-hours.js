/**
 * FreeCodeCamp Problem: Daylight Hours
 * Category: FreeCodeCamp
 *
 * @param {number} latitude - The latitude in degrees (-90 to 90)
 * @returns {number} Estimated daylight hours on the solstice for the given latitude
 */

function daylightHours(latitude) {
  const daylightTable = [
    { lat: -90, hours: 24 },
    { lat: -75, hours: 23 },
    { lat: -60, hours: 21 },
    { lat: -45, hours: 15 },
    { lat: -30, hours: 13 },
    { lat: -15, hours: 12 },
    { lat: 0, hours: 12 },
    { lat: 15, hours: 11 },
    { lat: 30, hours: 10 },
    { lat: 45, hours: 9 },
    { lat: 60, hours: 6 },
    { lat: 75, hours: 2 },
    { lat: 90, hours: 0 },
  ];
  let closest = daylightTable[0];
  let minDiff = Math.abs(latitude - closest.lat);
  for (let i = 1; i < daylightTable.length; i++) {
    const diff = Math.abs(latitude - daylightTable[i].lat);
    if (diff < minDiff) {
      minDiff = diff;
      closest = daylightTable[i];
    }
  }
  return closest.hours;
}

export default daylightHours;
