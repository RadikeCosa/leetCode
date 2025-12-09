/**
 * FreeCodeCamp Problem: Pounds To Kilograms
 * Category: FreeCodeCamp
 *
 * @param {number} lbs - The weight in pounds to be converted.
 * @returns {string} A string stating the conversion from pounds to kilograms.
 */
function convertToKgs(lbs) {
  const kgs = lbs * 0.453592;
  const roundedKgs = kgs.toFixed(2);
  const poundWord = lbs === 1 ? "pound" : "pounds";
  const kilogramWord = parseFloat(roundedKgs) === 1 ? "kilogram" : "kilograms";
  return `${lbs} ${poundWord} equals ${roundedKgs} ${kilogramWord}.`;
}

export default convertToKgs;
