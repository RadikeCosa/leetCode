/**
 * FreeCodeCamp Problem: Exoplanet Search
 * Difficulty: Easy
 * Topics: Strings, Math, Arrays
 *
 * For the second day of Space Week, you are given a string where each character represents the luminosity reading of a star. Determine if the readings have detected an exoplanet using the transit method. The transit method is when a planet passes in front of a star, reducing its observed luminosity.
 *
 * Luminosity readings only comprise of characters 0-9 and A-Z where each reading corresponds to the following numerical values:
 * Characters 0-9 correspond to luminosity levels 0-9.
 * Characters A-Z correspond to luminosity levels 10-35.
 * A star is considered to have an exoplanet if any single reading is less than or equal to 80% of the average of all readings. For example, if the average luminosity of a star is 10, it would be considered to have a exoplanet if any single reading is 8 or less.
 *
 * Time Complexity: O(n) - Un solo loop lineal por todos los caracteres
 * Space Complexity: O(1) - Solo variables escalares, sin arrays adicionales
 */
function hasExoplanet(readings) {
  const charToValue = (char) => {
    // Fórmula unificada usando códigos ASCII:
    // Para dígitos (0-9): charCode - 48 (código de '0')
    // Para letras (A-Z): charCode - 55 (ajustado para que 'A' = 10)
    return char.charCodeAt(0) - (char >= "A" ? 55 : 48);
  };

  // Optimización: Un solo loop para calcular suma y encontrar valor mínimo
  let total = 0;
  let minValue = Infinity;

  for (let i = 0; i < readings.length; i++) {
    const value = charToValue(readings[i]);
    total += value;
    if (value < minValue) minValue = value;
  }

  // Calcular promedio y threshold
  const average = total / readings.length;
  const threshold = average * 0.8;

  // Verificar si el valor mínimo es menor o igual al threshold
  return minValue <= threshold;
}

export default hasExoplanet;
