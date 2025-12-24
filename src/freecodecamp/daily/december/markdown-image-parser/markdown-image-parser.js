/**
 * FreeCodeCamp Problem: Markdown Image Parser
 * Category: FreeCodeCamp
 *
 * @param {string} markdown - The markdown string representing an image
 * @returns {string} The HTML string representing the image
 */

function parseImage(markdown) {
  // Expresión regular para capturar alt text y image URL
  const regex = /!\[(.*?)\]\((.*?)\)/;
  // Aplicar la expresión regular al string de entrada
  const match = markdown.match(regex);
  // Si hay una coincidencia, extraer los componentes y construir el string HTML
  if (match) {
    const altText = match[1];
    const imageUrl = match[2];
    return `<img src="${imageUrl}" alt="${altText}">`;
  }
  // Si no hay coincidencia, retornar un string vacío o manejar el error según sea necesario
  return "";
}

export default parseImage;
