/**
 * FreeCodeCamp Problem: Tire Pressure
 * Category: FreeCodeCamp
 *
 * @param {array<number>} pressuresPSI - Array of tire pressures in PSI
 * @param {array<number>} rangeBar - Array with two numbers representing the minimum and maximum pressure in bar
 * @returns {array<string>} - Array of strings indicating the status of each tire ("Low", "Good", "High")
 */
function tireStatus(pressuresPSI, rangeBar) {
  let [minBar, maxBar] = rangeBar;
  const PSI_TO_BAR = 14.5038;

  // Convert min and max from bar to psi
  const minPSI = minBar * PSI_TO_BAR;
  const maxPSI = maxBar * PSI_TO_BAR;

  return pressuresPSI.map((pressure) => {
    if (pressure < minPSI) {
      return "Low";
    } else if (pressure > maxPSI) {
      return "High";
    } else {
      return "Good";
    }
  });
}
export default tireStatus;
