import { it, describe, expect } from "vitest";
import characterBattle from "./character-battle";

/**
  1. battle("Hello", "World") should return "We lost".
  2. battle("pizza", "salad") should return "We won".
  3. battle("C@T5", "D0G$") should return "We won".
  4. battle("kn!ght", "orc") should return "Opponent retreated".
  5. battle("PC", "Mac") should return "We retreated".
  6. battle("Wizards", "Dragons") should return "It was a tie".
  7. battle("Mr. Smith", "Dr. Jones") should return "It was a tie".
 */

describe("Character Battle", () => {
  it("battle('Hello', 'World') should return 'We lost'", () => {
    expect(characterBattle("Hello", "World")).toBe("We lost");
  });

  it("battle('pizza', 'salad') should return 'We won'", () => {
    expect(characterBattle("pizza", "salad")).toBe("We won");
  });

  it("battle('C@T5', 'D0G$') should return 'We won'", () => {
    expect(characterBattle("C@T5", "D0G$")).toBe("We won");
  });

  it("battle('kn!ght', 'orc') should return 'Opponent retreated'", () => {
    expect(characterBattle("kn!ght", "orc")).toBe("Opponent retreated");
  });
  it("battle('PC', 'Mac') should return 'We retreated'", () => {
    expect(characterBattle("PC", "Mac")).toBe("We retreated");
  });
  it("battle('Wizards', 'Dragons') should return 'It was a tie'", () => {
    expect(characterBattle("Wizards", "Dragons")).toBe("It was a tie");
  });
  it("battle('Mr. Smith', 'Dr. Jones') should return 'It was a tie'", () => {
    expect(characterBattle("Mr. Smith", "Dr. Jones")).toBe("It was a tie");
  });
});
