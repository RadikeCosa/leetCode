/**
 * FreeCodeCamp Problem: Hex Generator
 * Category: FreeCodeCamp
 *
 * @param {string} color - The name of the CSS color ("red", "green", or "blue")
 * @returns {string} A random six-character hex color code dominant in the given color or "Invalid color" if input is invalid
 */
function generateHex(color) {
  const colors = ["red", "green", "blue"];
  if (!colors.includes(color)) return "Invalid color";

  // Genera dos valores aleatorios entre 0 y 254 para los componentes no dominantes
  let r = 0,
    g = 0,
    b = 0;
  let others = [
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
  ];
  // El dominante debe ser mayor que los otros dos (hasta 255)
  let dominant = Math.max(...others) + 1;
  if (dominant > 255) dominant = 255;

  if (color === "red") {
    r = dominant;
    g = others[0];
    b = others[1];
  } else if (color === "green") {
    g = dominant;
    r = others[0];
    b = others[1];
  } else if (color === "blue") {
    b = dominant;
    r = others[0];
    g = others[1];
  }

  // Convierte cada componente a dos dígitos hexadecimales
  const toHex = (n) => n.toString(16).padStart(2, "0").toUpperCase();
  return `${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export default generateHex;
