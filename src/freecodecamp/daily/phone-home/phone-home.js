/**
 * FreeCodeCamp Problem: Space Week Day 3: Phone Home
 * Difficulty: Easy
 * Topics: Array, Math
 *
 * You are given an array of numbers representing distances (in kilometers) between yourself, satellites, and your home planet in a communication route. Determine how long it will take a message sent through the route to reach its destination planet using the following constraints:
 *
 * The first value in the array is the distance from your location to the first satellite.
 * Each subsequent value, except for the last, is the distance to the next satellite.
 * The last value in the array is the distance from the previous satellite to your home planet.
 * The message travels at 300,000 km/s.
 * Each satellite the message passes through adds a 0.5 second transmission delay.
 * Return a number rounded to 4 decimal places, with trailing zeros removed.
 *
 * Time Complexity: O(n) - Linear time to sum all distances in the route array
 * Space Complexity: O(1) - Constant space, only using primitive variables
 */
function sendMessage(route) {
  // Constantes para evitar números mágicos
  const SPEED_KM_PER_SECOND = 300000;
  const SATELLITE_DELAY_SECONDS = 0.5;

  // Calcular distancia total recorrida por el mensaje
  const totalDistance = route.reduce((sum, distance) => sum + distance, 0);

  // Número de satélites = elementos del array - 1
  const satelliteCount = route.length - 1;

  // Tiempo de viaje = distancia total / velocidad
  const travelTime = totalDistance / SPEED_KM_PER_SECOND;

  // Delay total = número de satélites × delay por satélite
  const totalDelay = satelliteCount * SATELLITE_DELAY_SECONDS;

  // Tiempo total redondeado a 4 decimales
  const totalTime = travelTime + totalDelay;

  return parseFloat(totalTime.toFixed(4));
}

export default sendMessage;
