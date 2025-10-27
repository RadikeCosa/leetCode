/**
 * FreeCodeCamp Problem: RGB to Hex
 * Category: Daily
 */
function rgbToHex(rgb) {
  // Extraer valores RGB de manera más simple
  const values = rgb
    .slice(4, -1)
    .split(",")
    .map((v) => parseInt(v.trim(), 10));
  const [r, g, b] = values;

  // Convertir a hex con padding automático
  const toHex = (num) => num.toString(16).padStart(2, "0");

  // Concatenar resultado
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export default rgbToHex;
