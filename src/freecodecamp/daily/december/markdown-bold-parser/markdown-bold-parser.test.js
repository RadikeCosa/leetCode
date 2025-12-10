import parseBold from "./markdown-bold-parser";
import { describe, it, expect } from "vitest";
/**
 Markdown Bold Parser
Given a string that may include some bold text in Markdown, return the equivalent HTML string.

Bold text in Markdown is any text that starts and ends with two asterisks (**) or two underscores (__).
There cannot be any spaces between the text and the asterisks or underscores, but there can be spaces in the text itself.
Convert all bold occurrences to HTML b tags and return the string.
For example, given "**This is bold**", return "<b>This is bold</b>".

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

Tests
1. parseBold("**This is bold**") should return "<b>This is bold</b>".
2. parseBold("__This is also bold__") should return "<b>This is also bold</b>".
3. parseBold("**This is not bold **") should return "**This is not bold **".
4. parseBold("__ This is also not bold__") should return "__ This is also not bold__".
5. parseBold("The **quick** brown fox __jumps__ over the **lazy** dog.") should return "The <b>quick</b> brown fox <b>jumps</b> over the <b>lazy</b> dog."

// Casos de prueba adicionales sugeridos:
// 6. parseBold("**bold** and __bold__") debería devolver "<b>bold</b> and <b>bold</b>"
// 7. parseBold("No bold here") debería devolver "No bold here"
// 8. parseBold("**bold__") debería devolver "**bold__" (delimitadores no coinciden)
// 9. parseBold("****") debería devolver "<b></b>" (negrita vacía)
// 10. parseBold("__**nested**__") debería devolver "<b>**nested**</b>" (solo se procesa el delimitador externo si es válido)
*/

describe("Markdown Bold Parser", () => {
  it("should convert '**This is bold**' to '<b>This is bold</b>'", () => {
    expect(parseBold("**This is bold**")).toBe("<b>This is bold</b>");
  });

  it("should convert '__This is also bold__' to '<b>This is also bold</b>'", () => {
    expect(parseBold("__This is also bold__")).toBe("<b>This is also bold</b>");
  });

  it("should return '**This is not bold **' unchanged", () => {
    expect(parseBold("**This is not bold **")).toBe("**This is not bold **");
  });

  it("should return '__ This is also not bold__' unchanged", () => {
    expect(parseBold("__ This is also not bold__")).toBe(
      "__ This is also not bold__"
    );
  });

  it("should convert 'The **quick** brown fox __jumps__ over the **lazy** dog.' correctly", () => {
    expect(
      parseBold("The **quick** brown fox __jumps__ over the **lazy** dog.")
    ).toBe("The <b>quick</b> brown fox <b>jumps</b> over the <b>lazy</b> dog.");
  });

  // Additional suggested test cases
  it("should convert '**bold** and __bold__' to '<b>bold</b> and <b>bold</b>'", () => {
    expect(parseBold("**bold** and __bold__")).toBe(
      "<b>bold</b> and <b>bold</b>"
    );
  });

  it("should return 'No bold here' unchanged", () => {
    expect(parseBold("No bold here")).toBe("No bold here");
  });

  it("should return '**bold__' unchanged (mismatched delimiters)", () => {
    expect(parseBold("**bold__")).toBe("**bold__");
  });

  it("should convert '__**nested**__' to '<b>**nested**</b>' (only outer valid delimiter)", () => {
    expect(parseBold("__**nested**__")).toBe("<b>**nested**</b>");
  });
});
