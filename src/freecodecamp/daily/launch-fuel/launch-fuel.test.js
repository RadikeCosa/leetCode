/**
 * FreeCodeCamp Problem: Space Week Day 7: Launch Fuel
 * Category: Daily
 * Difficulty: Medium
 * Topics: Math, Recursion, Simulation
 *
 * For the final day of Space Week, you will be given the mass in kilograms (kg) of a payload you want to send to orbit. Determine the amount of fuel needed to send your payload to orbit using the following rules:
 *
 * Rockets require 1 kg of fuel per 5 kg of mass they must lift.
 * Fuel itself has mass. So when you add fuel, the mass to lift goes up, which requires more fuel, which increases the mass, and so on.
 * To calculate the total fuel needed: start with the payload mass, calculate the fuel needed for that, add that fuel to the total mass, and calculate again. Repeat this process until the additional fuel required is less than 1 kg, then stop.
 * Ignore the mass of the rocket itself. Only compute fuel needed to lift the payload and its own fuel.
 * Return the amount of fuel needed rounded to one decimal place.
 *
 * Example:
 * launchFuel(50) should return 12.4
 * launchFuel(500) should return 125.0
 * launchFuel(243) should return 60.7
 * launchFuel(11000) should return 2750.0
 * launchFuel(6214) should return 1553.4
 *
 * Constraints:
 * - payload es un número entero positivo
 */
import { describe, it, expect } from "vitest";
import launchFuel from "./launch-fuel.js";

describe("Launch Fuel", () => {
  it("should return 12.4 for input 50", () => {
    expect(launchFuel(50)).toBe(12.4);
  });
  it("should return 125.0 for input 500", () => {
    expect(launchFuel(500)).toBe(125.0);
  });
  it("should return 60.7 for input 243", () => {
    expect(launchFuel(243)).toBe(60.7);
  });
  it("should return 2750.0 for input 11000", () => {
    expect(launchFuel(11000)).toBe(2750.0);
  });
  it("should return 1553.4 for input 6214", () => {
    expect(launchFuel(6214)).toBe(1553.4);
  });
  it("should return 0.8 for input 4 (payload menor a 5 kg)", () => {
    expect(launchFuel(4)).toBe(0.8);
  });
  it("should return 0.0 for input 0 (payload igual a 0 kg)", () => {
    expect(launchFuel(0)).toBe(0.0);
  });
  it("should return 24999.9 for input 100000 (payload muy grande)", () => {
    expect(launchFuel(100000)).toBe(24999.9);
  });
  it("should return 1.2 for input 5 (payload justo en el límite de corte)", () => {
    expect(launchFuel(5)).toBe(1.2);
  });
});
