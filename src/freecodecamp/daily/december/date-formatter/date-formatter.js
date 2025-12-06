/**
 * FreeCodeCamp Problem: Date Formatter
 * Category: FreeCodeCamp
 *
 * @param {string} dateString - The date string to format
 * @returns {string} The formatted date string
 */
function formatDate(dateString) {
  const day = dateString.split(" ")[1].replace(",", "").padStart(2, "0");
  const year = dateString.split(" ")[2];
  const monthMap = {
    January: "01",
    February: "02",
    March: "03",
    April: "04",
    May: "05",
    June: "06",
    July: "07",
    August: "08",
    September: "09",
    October: "10",
    November: "11",
    December: "12",
  };
  const month = monthMap[dateString.split(" ")[0]];
  dateString = `${year}-${month}-${day}`;

  return dateString;
}

export default formatDate;
