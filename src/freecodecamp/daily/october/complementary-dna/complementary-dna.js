/**
 * FreeCodeCamp Problem: Complementary DNA
 * Category: Daily
 */
function complementaryDNA(strand) {
  const pairs = { A: "T", T: "A", C: "G", G: "C" };
  return strand
    .split("")
    .map((char) => pairs[char])
    .join("");
}

export default complementaryDNA;
