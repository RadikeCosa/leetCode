/**
 * FreeCodeCamp Problem: Space Week Day 7: Launch Fuel
 * Category: Daily
 * Difficulty: Medium
 * Topics: Math, Recursion, Simulation
 *
 * For the final day of Space Week, you will be given the mass in kilograms (kg) of a payload you want to send to orbit. Determine the amount of fuel needed to send your payload to orbit using the following rules:
 *
 * Rockets require 1 kg of fuel per 5 kg of mass they must lift.
 * Fuel itself has mass. So when you add fuel, the mass to lift goes up, which requires more fuel, which increases the mass, and so on.
 * To calculate the total fuel needed: start with the payload mass, calculate the fuel needed for that, add that fuel to the total mass, and calculate again. Repeat this process until the additional fuel required is less than 1 kg, then stop.
 * Ignore the mass of the rocket itself. Only compute fuel needed to lift the payload and its own fuel.
 * Return the amount of fuel needed rounded to one decimal place.
 *
 * Time Complexity: O(log(payload))
 * Space Complexity: O(1)
 */
function launchFuel(payload) {
  // Si el payload es menor a 5, solo se necesita una iteración
  if (payload < 5) {
    return parseFloat((payload / 5).toFixed(1));
  }
  let totalMass = payload;
  let totalFuel = 0;
  while (true) {
    let fuel = totalMass / 5;
    let increment = fuel - totalFuel;
    totalFuel = fuel; // Actualizar al nuevo valor de combustible total
    if (increment < 1) break; // Detener después de actualizar si el incremento es < 1
    totalMass = payload + totalFuel; // Recalcular masa total
  }
  return parseFloat(totalFuel.toFixed(1));
}

module.exports = launchFuel;
