/**
 * FreeCodeCamp Problem: Email Signature Generator
 * Category: FreeCodeCamp
 *
 * @param {any} param - TODO: Define parameter and description
 * @returns {any} TODO: Define return type and description
 */
function generateSignature(name, title, company) {
  const firstNameLetter = name[0].toUpperCase();
  let prefix = "";

  if (firstNameLetter >= "A" && firstNameLetter <= "I") {
    prefix = ">>";
  } else if (firstNameLetter >= "J" && firstNameLetter <= "R") {
    prefix = "--";
  } else if (firstNameLetter >= "S" && firstNameLetter <= "Z") {
    prefix = "::";
  }

  return `${prefix}${name}, ${title} at ${company}`;
}

export default generateSignature;
