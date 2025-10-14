/**
 * FreeCodeCamp Problem: 24 to 12
 * Category: Daily
 * Difficulty: Easy
 * Topics: Strings, Time, Formatting
 *
 * Given a string representing a time of the day in the 24-hour format of "HHMM",
 * return the time in its equivalent 12-hour format of "H:MM AM" or "H:MM PM".
 *
 * The given input will always be a four-digit string in 24-hour time format, from "0000" to "2359".
 */
function to12(time) {
  // Extraer las horas del string de entrada (primeros 2 caracteres)
  // Convertir a número entero para facilitar las operaciones matemáticas
  const hours = parseInt(time.slice(0, 2), 10);

  // Extraer los minutos del string de entrada (últimos 2 caracteres)
  // Mantener como string para preservar el formato con cero inicial si es necesario
  const minutes = time.slice(2);

  // Determinar si es AM o PM: si horas < 12 entonces AM, sino PM
  const period = hours < 12 ? "AM" : "PM";

  // Convertir horas del formato 24h al formato 12h
  // hours % 12 convierte 13-23 a 1-11, pero 12 % 12 = 0
  // El operador || 12 maneja el caso especial: si el resultado es 0, usar 12
  // Esto funciona para: 0→12, 1-11→1-11, 12→12, 13-23→1-11
  const adjustedHours = hours % 12 || 12;

  // Formatear y retornar el resultado en formato "H:MM AM/PM"
  // adjustedHours ya no tiene cero inicial (excepto 12)
  // minutes mantiene el cero inicial si era "00", "01", etc.
  return `${adjustedHours}:${minutes} ${period}`;
}

export default to12;
