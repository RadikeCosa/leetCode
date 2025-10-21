/**
 * FreeCodeCamp Problem: Thermostat Adjuster 2
 * Category: Daily
 *
 * Given the current temperature of a room in Fahrenheit and a target temperature in Celsius,
 * return a string indicating how to adjust the room temperature based on these constraints:
 *
 * - Return "Heat: X degrees Fahrenheit" if the current temperature is below the target.
 *   With X being the number of degrees in Fahrenheit to heat the room to reach the target,
 *   rounded to 1 decimal place.
 * - Return "Cool: X degrees Fahrenheit" if the current temperature is above the target.
 *   With X being the number of degrees in Fahrenheit to cool the room to reach the target,
 *   rounded to 1 decimal place.
 * - Return "Hold" if the current temperature is equal to the target.
 *
 * To convert Celsius to Fahrenheit: F = (C * 1.8) + 32
 */

function adjustThermostat(currentF, targetC) {
  const targetF = parseFloat((targetC * 1.8 + 32).toFixed(1));

  if (currentF < targetF) {
    const difference = (targetF - currentF).toFixed(1);
    return `Heat: ${difference} degrees Fahrenheit`;
  } else if (currentF > targetF) {
    const difference = (currentF - targetF).toFixed(1);
    return `Cool: ${difference} degrees Fahrenheit`;
  } else {
    return "Hold";
  }
}

export default adjustThermostat;
