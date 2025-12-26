import generateSnowflake from "./snowflake-generator";

/**
 Snowflake Generator
Given a multi-line string that uses newline characters (\n) to represent a line break, return a new string where each line is mirrored horizontally and attached to the end of the original line.

Mirror a line by reversing all of its characters, including spaces.
For example, given "* \n *\n* ", which logs to the console as:

* 
 *
* 
Return "*  *\n ** \n*  *", which logs to the console as:

*  *
 ** 
*  *
Take careful note of the whitespaces in the given and returned strings. Be sure not to trim any of them.

Tests
1. generateSnowflake("* \n *\n* ") should return "*  *\n ** \n*  *".
2. generateSnowflake("X=~") should return "X=~~=X".
3. generateSnowflake(" X  \n  v \nX--=\n  ^ \n X  ") should return " X    X \n  v  v  \nX--==--X\n  ^  ^  \n X    X ".
4. generateSnowflake("*   *\n * * \n* * *\n * * \n*   *") should return "*   **   *\n * *  * * \n* * ** * *\n * *  * * \n*   **   *".
5. generateSnowflake("*  -\n * -\n*  -") should return "*  --  *\n * -- * \n*  --  *".

 */

describe("Snowflake Generator", () => {
  it("Test Case 1", () => {
    const input = "* \n *\n* ";
    const expectedOutput = "*  *\n ** \n*  *";
    expect(generateSnowflake(input)).toBe(expectedOutput);
  });

  it("Test Case 2", () => {
    const input = "X=~";
    const expectedOutput = "X=~~=X";
    expect(generateSnowflake(input)).toBe(expectedOutput);
  });
  it("Test Case 3", () => {
    const input = " X  \n  v \nX--=\n  ^ \n X  ";
    const expectedOutput = " X    X \n  v  v  \nX--==--X\n  ^  ^  \n X    X ";
    expect(generateSnowflake(input)).toBe(expectedOutput);
  });

  it("Test Case 4", () => {
    const input = "*   *\n * * \n* * *\n * * \n*   *";
    const expectedOutput =
      "*   **   *\n * *  * * \n* * ** * *\n * *  * * \n*   **   *";
    expect(generateSnowflake(input)).toBe(expectedOutput);
  });

  it("Test Case 5", () => {
    const input = "*  -\n * -\n*  -";
    const expectedOutput = "*  --  *\n * -- * \n*  --  *";
    expect(generateSnowflake(input)).toBe(expectedOutput);
  });
});
