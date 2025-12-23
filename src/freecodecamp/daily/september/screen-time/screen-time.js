/**
 * FreeCodeCamp Problem: Screen Time
 * Category: FreeCodeCamp
 *
 * @param {Array<number>} hours - An array of seven integers representing hours spent on the phone each day
 * @returns {boolean} Returns true if screen time is too much based on given constraints, otherwise false
 */
function tooMuchScreenTime(hours) {
  let totalHours = 0;
  for (let i = 0; i < hours.length; i++) {
    // Verificar si algún día tiene 10 o más horas
    if (hours[i] >= 10) {
      return true;
    }

    totalHours += hours[i];

    // Verificar promedios de tres días consecutivos
    if (i >= 2) {
      const threeDayAvg = (hours[i] + hours[i - 1] + hours[i - 2]) / 3;
      if (threeDayAvg >= 8) {
        return true;
      }
    }
  }

  // Calcular promedio semanal
  const weeklyAvg = totalHours / hours.length;
  if (weeklyAvg >= 6) {
    return true;
  }

  return false;
}

export default tooMuchScreenTime;
