import toScreamingSnakeCase from "./screaming-snake-case";

/**
 SCREAMING_SNAKE_CASE
Given a string representing a variable name, return the variable name converted to SCREAMING_SNAKE_CASE.

The given variable names will be written in one of the following formats:

camelCase
PascalCase
snake_case
kebab-case
In the above formats, words are separated by an underscore (_), a hyphen (-), or a new word starts with a capital letter.

To convert to SCREAMING_SNAKE_CASE:

Make all letters uppercase
Separate words with an underscore (_)
Tests
1. toScreamingSnakeCase("userEmail") should return "USER_EMAIL".
2. toScreamingSnakeCase("UserPassword") should return "USER_PASSWORD".
3. toScreamingSnakeCase("user_id") should return "USER_ID".
4. toScreamingSnakeCase("user-address") should return "USER_ADDRESS".
5. toScreamingSnakeCase("username") should return "USERNAME"
 */

describe("Screaming Snake Case", () => {
  it("toScreamingSnakeCase('userEmail') should return 'USER_EMAIL'", () => {
    expect(toScreamingSnakeCase("userEmail")).toBe("USER_EMAIL");
  });

  it("toScreamingSnakeCase('UserPassword') should return 'USER_PASSWORD'", () => {
    expect(toScreamingSnakeCase("UserPassword")).toBe("USER_PASSWORD");
  });

  it("toScreamingSnakeCase('user_id') should return 'USER_ID'", () => {
    expect(toScreamingSnakeCase("user_id")).toBe("USER_ID");
  });

  it("toScreamingSnakeCase('user-address') should return 'USER_ADDRESS'", () => {
    expect(toScreamingSnakeCase("user-address")).toBe("USER_ADDRESS");
  });
  it("toScreamingSnakeCase('username') should return 'USERNAME'", () => {
    expect(toScreamingSnakeCase("username")).toBe("USERNAME");
  });
});
