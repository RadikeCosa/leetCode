/**
 * FreeCodeCamp Problem: CSV Header Parser
 * Category: Daily
 *
 * Given the first line of a comma-separated values (CSV) file, return an array containing the headings.
 *
 * The first line of a CSV file contains headings separated by commas.
 * Remove any leading or trailing whitespace from each heading.
 */
function getHeadings(csv) {
  return csv.split(",").map((heading) => heading.trim());
}

export default getHeadings;
