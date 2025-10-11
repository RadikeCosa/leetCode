/**
 * FreeCodeCamp Problem: Inventory Update
 * Category: Coding Interview Prep
 * Difficulty: Medium
 * Topics: Array, Sorting, Map
 *
 * Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
 *
 * Example:
 * Input: [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]
 * Output: [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]
 *
 * Constraints:
 * - arr1 y arr2 son arrays de pares [cantidad, nombre]
 * - Los nombres pueden repetirse solo en arr2
 */
import { describe, it, expect } from "vitest";
import updateInventory from "./update-inventory.js";

describe("Inventory Update", () => {
  it("should update existing items and add new items correctly", () => {
    const currentInventory = [
      [21, "Bowling Ball"],
      [2, "Dirty Sock"],
      [1, "Hair Pin"],
      [5, "Microphone"],
    ];
    const newInventory = [
      [2, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [67, "Bowling Ball"],
      [7, "Toothpaste"],
    ];
    const updatedInventory = updateInventory(currentInventory, newInventory);
    expect(updatedInventory).toEqual([
      [88, "Bowling Ball"],
      [2, "Dirty Sock"],
      [3, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [5, "Microphone"],
      [7, "Toothpaste"],
    ]);
  });
  it("should handle empty current inventory", () => {
    const currentInventory = [];
    const newInventory = [
      [2, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [67, "Bowling Ball"],
      [7, "Toothpaste"],
    ];
    const updatedInventory = updateInventory(currentInventory, newInventory);
    expect(updatedInventory).toEqual([
      [67, "Bowling Ball"],
      [2, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [7, "Toothpaste"],
    ]);
  });
  it("should handle both inventories empty", () => {
    expect(updateInventory([], [])).toEqual([]);
  });
  it("should handle repeated products in delivery", () => {
    expect(
      updateInventory(
        [],
        [
          [2, "A"],
          [3, "A"],
        ]
      )
    ).toEqual([[5, "A"]]);
  });
  it("should handle inventory with products and empty delivery", () => {
    expect(updateInventory([[1, "A"]], [])).toEqual([[1, "A"]]);
  });
  it("should handle zero quantity in inventory and delivery", () => {
    expect(updateInventory([[0, "A"]], [[0, "A"]])).toEqual([[0, "A"]]);
  });
  it("should handle product with empty string name", () => {
    expect(updateInventory([[1, ""]], [[2, ""]])).toEqual([[3, ""]]);
  });
});
