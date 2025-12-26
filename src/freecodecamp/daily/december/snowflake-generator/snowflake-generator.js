/**
 * FreeCodeCamp Problem: Snowflake Generator
 * Category: FreeCodeCamp
 *
 * @param {string} crystals - A multi-line string representing the snowflake pattern
 * @returns {string} A new string where each line is mirrored horizontally and attached to the end of the original line
 */
function generateSnowflake(crystals) {
  // Dividir el string en líneas
  const lines = crystals.split("\n");
  // Reflejar cada línea y concatenar
  const mirroredLines = lines.map((line) => {
    const reflected = line.split("").reverse().join("");
    return line + reflected;
  });
  // Reconstruir el string final
  return mirroredLines.join("\n");
}

export default generateSnowflake;
