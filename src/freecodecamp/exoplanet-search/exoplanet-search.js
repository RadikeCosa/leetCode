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
    // Si es un dígito (0-9), convertir directamente usando código ASCII
    // Ejemplo: '5' (ASCII 53) - '0' (ASCII 48) = 5
    if (char >= "0" && char <= "9") {
      return char.charCodeAt(0) - "0".charCodeAt(0);
    }
    // Si es una letra (A-Z), convertir a valor 10-35
    // Ejemplo: 'F' (ASCII 70) - 'A' (ASCII 65) + 10 = 15
    else {
      return char.charCodeAt(0) - "A".charCodeAt(0) + 10;
    }
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
