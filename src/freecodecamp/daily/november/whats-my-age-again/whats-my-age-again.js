/**
 * FreeCodeCamp Problem: Whats My Age Again
 * Category: FreeCodeCamp
 *
 * @param {string} birthday - The birth date in "YYYY-MM-DD" format
 * @returns {number} The calculated age
 */
function calculateAge(birthday) {
  const [y, m, d] = birthday.split("-").map(Number);
  const today = new Date();
  const age = today.getFullYear() - y;
  const hadBirthday =
    today.getMonth() + 1 > m ||
    (today.getMonth() + 1 === m && today.getDate() >= d);
  return hadBirthday ? age : age - 1;
}

export default calculateAge;
