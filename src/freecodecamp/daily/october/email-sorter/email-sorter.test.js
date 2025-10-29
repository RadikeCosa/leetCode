import sort from "./email-sorter.js";

/*
Email Sorter
On October 29, 1971, the first email ever was sent, introducing the username@domain format we still use. Now, there are billions of email addresses.

In this challenge, you are given a list of email addresses and need to sort them alphabetically by domain name first (the part after the @), and username second (the part before the @).

Sorting should be case-insensitive.
If more than one email has the same domain, sort them by their username.
Return an array of the sorted addresses.
Returned addresses should retain their original case.
For example, given ["jill@mail.com", "john@example.com", "jane@example.com"], return ["jane@example.com", "john@example.com", "jill@mail.com"].

Run the Tests (Ctrl + Enter)
Reset this lesson
Get Help
Tests
Waiting:1. sort(["jill@mail.com", "john@example.com", "jane@example.com"]) should return ["jane@example.com", "john@example.com", "jill@mail.com"].
Waiting:2. sort(["bob@mail.com", "alice@zoo.com", "carol@mail.com"]) should return ["bob@mail.com", "carol@mail.com", "alice@zoo.com"].
Waiting:3. sort(["user@z.com", "user@y.com", "user@x.com"]) should return ["user@x.com", "user@y.com", "user@z.com"].
Waiting:4. sort(["sam@MAIL.com", "amy@mail.COM", "bob@Mail.com"]) should return ["amy@mail.COM", "bob@Mail.com", "sam@MAIL.com"].
Waiting:5. sort(["simon@beta.com", "sammy@alpha.com", "Sarah@Alpha.com", "SAM@ALPHA.com", "Simone@Beta.com", "sara@alpha.com"]) should return ["SAM@ALPHA.com", "sammy@alpha.com", "sara@alpha.com", "Sarah@Alpha.com", "simon@beta.com", "Simone@Beta.com"].
*/
import { describe, it, expect } from "vitest";

describe("Email Sorter", () => {
  it("should sort emails by domain and username", () => {
    const input = ["jill@mail.com", "john@example.com", "jane@example.com"];
    const expected = ["jane@example.com", "john@example.com", "jill@mail.com"];
    expect(sort(input)).toEqual(expected);
  });
  it("should sort emails with same domain by username", () => {
    const input = ["bob@mail.com", "alice@zoo.com", "carol@mail.com"];
    const expected = ["bob@mail.com", "carol@mail.com", "alice@zoo.com"];
    expect(sort(input)).toEqual(expected);
  });
  it("should handle emails with different domains", () => {
    const input = ["user@z.com", "user@y.com", "user@x.com"];
    const expected = ["user@x.com", "user@y.com", "user@z.com"];
    expect(sort(input)).toEqual(expected);
  });
  it("should sort emails case-insensitively", () => {
    const input = ["Sam@MAIL.com", "amy@mail.COM", "bob@Mail.com"];
    const expected = ["amy@mail.COM", "bob@Mail.com", "Sam@MAIL.com"];
    expect(sort(input)).toEqual(expected);
  });
  it("should handle multiple emails with mixed cases", () => {
    const input = [
      "Sam@MAIL.com",
      "amy@mail.COM",
      "bob@Mail.com",
      "ALICE@ZOO.COM",
    ];
    const expected = [
      "amy@mail.COM",
      "bob@Mail.com",
      "Sam@MAIL.com",
      "ALICE@ZOO.COM",
    ];
    expect(sort(input)).toEqual(expected);
  });
  it("should handle complex cases with multiple same domains and mixed cases", () => {
    const input = [
      "Sam@MAIL.com",
      "sara@alpha.com",
      "bob@Mail.com",
      "ALICE@ZOO.COM",
    ];
    const expected = [
      "sara@alpha.com",
      "bob@Mail.com",
      "Sam@MAIL.com",
      "ALICE@ZOO.COM",
    ];
    expect(sort(input)).toEqual(expected);
  });
});
