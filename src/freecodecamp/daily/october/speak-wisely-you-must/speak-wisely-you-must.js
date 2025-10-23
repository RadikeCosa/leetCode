/**
 * FreeCodeCamp Problem: Speak Wisely, You Must
 * Category: Daily
 *
 * Given a sentence, return a version of it that sounds like advice from a wise teacher using the following rules:
 *
 * Words are separated by a single space.
 * Find the first occurrence of one of the following words in the sentence: "have", "must", "are", "will", "can".
 * Move all words before and including that word to the end of the sentence and:
 * Preserve the order of the words when you move them.
 * Make them all lowercase.
 * And add a comma and space before them.
 * Capitalize the first letter of the new first word of the sentence.
 * All given sentences will end with a single punctuation mark. Keep the original punctuation of the sentence and move it to the end of the new sentence.
 * Return the new sentence, make sure there's a single space between each word and no spaces at the beginning or end of the sentence.
 */
function wiseSpeak(sentence) {
  const words = sentence.slice(0, -1).split(" ");
  const punctuation = sentence.slice(-1);
  const keywords = ["have", "must", "are", "will", "can"];
  const foundIndex = words.findIndex((word) => keywords.includes(word));

  const before = words
    .slice(0, foundIndex + 1)
    .join(" ")
    .toLowerCase();
  const after = words.slice(foundIndex + 1).join(" ");
  const newFirstWord = after.charAt(0).toUpperCase() + after.slice(1);

  return `${newFirstWord}, ${before}${punctuation}`;
}

export default wiseSpeak;
