/**
 * FreeCodeCamp Problem: Spam Detector
 * Category: Daily
 *
 * Given a phone number in the format "+A (BBB) CCC-DDDD", where each letter represents a digit as follows:
 *
 * A represents the country code and can be any number of digits.
 * BBB represents the area code and will always be three digits.
 * CCC and DDDD represent the local number and will always be three and four digits long, respectively.
 * Determine if it's a spam number based on the following criteria:
 *
 * The country code is greater than 2 digits long or doesn't begin with a zero (0).
 * The area code is greater than 900 or less than 200.
 * The sum of first three digits of the local number appears within last four digits of the local number.
 * The number has the same digit four or more times in a row (ignoring the formatting characters).
 */
function isSpam(number) {
  const partes = extraerPartesConRegex(number);
  if (!partes) return false;

  const { countryCode, areaCode, localFirst, localLast } = partes;

  if (countryCode.length > 2 || countryCode[0] !== "0") {
    return true;
  }

  if (areaCode > 900 || areaCode < 200) {
    return true;
  }

  const sumaLocal = localFirst
    .split("")
    .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  if (localLast.includes(sumaLocal.toString())) {
    return true;
  }

  const numeroSinFormato = number.replace(/[^\d]/g, "");
  if (/(\d)\1{3,}/.test(numeroSinFormato)) {
    return true;
  }

  return false;
}

function extraerPartesConRegex(number) {
  // Patrón: +(\d+) \((\d{3})\) (\d{3})-(\d{4})
  const match = number.match(/\+(\d+)\s+\((\d{3})\)\s+(\d{3})-(\d{4})/);

  if (!match) return null;

  const [, countryCode, areaCode, localFirst, localLast] = match;
  return { countryCode, areaCode, localFirst, localLast };
}

export default isSpam;
