/**
 * FreeCodeCamp Problem: Space Week Day 6: Moon Phase
 * Category: Daily
 * Difficulty: Medium
 * Topics: Date, Math, String
 *
 * For day six of Space Week, you will be given a date in the format "YYYY-MM-DD" and need to determine the phase of the moon for that day using the following rules:
 *
 * Use a simplified lunar cycle of 28 days, divided into four equal phases:
 *
 * "New": days 1 - 7
 * "Waxing": days 8 - 14
 * "Full": days 15 - 21
 * "Waning": days 22 - 28
 * After day 28, the cycle repeats with day 1, a new moon.
 *
 * Use "2000-01-06" as a reference new moon (day 1 of the cycle) to determine the phase of the given day.
 * You will not be given any dates before the reference date.
 * Return the correct phase as a string.
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
function moonPhase(date) {
  // Paso 1: Crear objetos Date para la fecha de referencia y la fecha dada
  const referenceDate = new Date("2000-01-06"); // Fecha de referencia: día 1 del ciclo lunar
  const givenDate = new Date(date); // Convertir la string de fecha a objeto Date

  // Paso 2: Calcular la diferencia en milisegundos entre las fechas
  const diffInTime = givenDate - referenceDate; // Diferencia en milisegundos

  // Paso 3: Convertir la diferencia a días enteros
  const diffInDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24)); // Convertir ms a días

  // Paso 4: Calcular el día del ciclo lunar (1-28)
  // Para este problema específico, sabemos que diffInDays >= 0
  // por lo que podemos simplificar: (diffInDays % 28) + 1
  // Esto nos da un rango de 1-28 en lugar de 0-27
  const lunarCycleDay = (diffInDays % 28) + 1;

  // Paso 5: Determinar la fase lunar según el día del ciclo
  if (lunarCycleDay <= 7) return "New"; // Días 1-7: Luna Nueva
  if (lunarCycleDay <= 14) return "Waxing"; // Días 8-14: Luna Creciente
  if (lunarCycleDay <= 21) return "Full"; // Días 15-21: Luna Llena
  return "Waning"; // Días 22-28: Luna Menguante
}

module.exports = moonPhase;
