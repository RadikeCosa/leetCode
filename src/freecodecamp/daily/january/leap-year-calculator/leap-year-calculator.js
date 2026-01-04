/**
 * FreeCodeCamp Problem: Leap Year Calculator
 * Category: FreeCodeCamp
 *
 * @param {number} year - The year to check
 * @returns {boolean} True if the year is a leap year, false otherwise
 */
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export default isLeapYear;
