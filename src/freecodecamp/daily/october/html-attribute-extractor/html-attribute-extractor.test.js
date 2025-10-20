/**
 * FreeCodeCamp Problem: HTML Attribute Extractor
 *
 * Given a string of a valid HTML element, return the attributes of the element using the following criteria:
 *
 * - You will only be given one element.
 * - Attributes will be in the format: attribute="value".
 * - Return an array of strings with each attribute property and value, separated by a comma,
 *   in this format: ["attribute1, value1", "attribute2, value2"].
 * - Return attributes in the order they are given.
 * - If no attributes are found, return an empty array.
 *
 * Ejemplos de prueba:
 * - extractAttributes('<span class="red"></span>') should return ["class, red"]
 * - extractAttributes('<meta charset="UTF-8" />') should return ["charset, UTF-8"]
 * - extractAttributes("<p>Lorem ipsum dolor sit amet</p>") should return []
 * - extractAttributes('<input name="email" type="email" required="true" />') should return ["name, email", "type, email", "required, true"]
 * - extractAttributes('<button id="submit" class="btn btn-primary">Submit</button>') should return ["id, submit", "class, btn btn-primary"]
 */
import { it, describe, expect } from "vitest";
import extractAttributes from "./html-attribute-extractor.js";

describe("HTML Attribute Extractor", () => {
  it('should return ["class, red"] for <span class="red"></span>', () => {
    expect(extractAttributes('<span class="red"></span>')).toEqual([
      "class, red",
    ]);
  });
  it('should return ["charset, UTF-8"] for <meta charset="UTF-8" />', () => {
    expect(extractAttributes('<meta charset="UTF-8" />')).toEqual([
      "charset, UTF-8",
    ]);
  });
  it("should return [] for <p>Lorem ipsum dolor sit amet</p>", () => {
    expect(extractAttributes("<p>Lorem ipsum dolor sit amet</p>")).toEqual([]);
  });
  it('should return ["name, email", "type, email", "required, true"] for <input name="email" type="email" required="true" />', () => {
    expect(
      extractAttributes('<input name="email" type="email" required="true" />')
    ).toEqual(["name, email", "type, email", "required, true"]);
  });
  it('should return ["id, submit", "class, btn btn-primary"] for <button id="submit" class="btn btn-primary">Submit</button>', () => {
    expect(
      extractAttributes(
        '<button id="submit" class="btn btn-primary">Submit</button>'
      )
    ).toEqual(["id, submit", "class, btn btn-primary"]);
  });
});
