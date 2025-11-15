import { it, describe, expect } from "vitest";
import gcd from "./gcd";

/**
Test1.  gcd(4, 6) should return 2.
Test2. gcd(20, 15) should return 5.
Test3. gcd(13, 17) should return 1.
Test4. gcd(654, 456) should return 6.
Test5. gcd(3456, 4320) should return 864.
 */

describe("Gcd", () => {
  it("gcd(4, 6) should return 2.", () => {
    expect(gcd(4, 6)).toBe(2);
  });
  it("gcd(20, 15) should return 5.", () => {
    expect(gcd(20, 15)).toBe(5);
  });
  it("gcd(13, 17) should return 1.", () => {
    expect(gcd(13, 17)).toBe(1);
  });
  it("gcd(654, 456) should return 6.", () => {
    expect(gcd(654, 456)).toBe(6);
  });
  it("gcd(3456, 4320) should return 864.", () => {
    expect(gcd(3456, 4320)).toBe(864);
  });
});
