/**
 * FreeCodeCamp Problem: Thermostat Adjuster
 * Category: FreeCodeCamp
 *
 * @param {number} temp - The current temperature of the room
 * @param {number} target - The target temperature to achieve
 * @returns {string} A string indicating how to adjust the temperature ("heat", "cool", or "hold")
 */
function adjustThermostat(temp, target) {
  if (temp < target) {
    return "heat";
  }
  if (temp > target) {
    return "cool";
  }
  return "hold";
}

export default adjustThermostat;
