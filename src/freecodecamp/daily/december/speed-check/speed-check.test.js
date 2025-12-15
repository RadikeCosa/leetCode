import speedCheck from "./speed-check";

/**
 Speed Check
Given the speed you are traveling in miles per hour (MPH), and a speed limit in kilometers per hour (KPH), determine whether you are speeding and if you will get a warning or a ticket.

1 mile equals 1.60934 kilometers.
If you are travelling less than or equal to the speed limit, return "Not Speeding".
If you are travelling 5 KPH or less over the speed limit, return "Warning".
If you are travelling more than 5 KPH over the speed limit, return "Ticket".
Tests
1. speedCheck(30, 70) should return "Not Speeding".
2. speedCheck(40, 60) should return "Warning".
3. speedCheck(40, 65) should return "Not Speeding".
4. speedCheck(60, 90) should return "Ticket".
5. speedCheck(65, 100) should return "Warning".
6. speedCheck(88, 40) should return "Ticket".
 */

describe("Speed Check", () => {
  it("should return 'Not Speeding' for speedCheck(30, 70)", () => {
    expect(speedCheck(30, 70)).toBe("Not Speeding");
  });

  it("should return 'Warning' for speedCheck(40, 60)", () => {
    expect(speedCheck(40, 60)).toBe("Warning");
  });

  it("should return 'Not Speeding' for speedCheck(40, 65)", () => {
    expect(speedCheck(40, 65)).toBe("Not Speeding");
  });

  it("should return 'Ticket' for speedCheck(60, 90)", () => {
    expect(speedCheck(60, 90)).toBe("Ticket");
  });

  it("should return 'Warning' for speedCheck(65, 100)", () => {
    expect(speedCheck(65, 100)).toBe("Warning");
  });

  it("should return 'Ticket' for speedCheck(88, 40)", () => {
    expect(speedCheck(88, 40)).toBe("Ticket");
  });
});
