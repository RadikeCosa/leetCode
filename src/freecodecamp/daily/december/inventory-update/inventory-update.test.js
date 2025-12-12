import updateInventory from "./inventory-update";
import { describe, it, expect } from "vitest";
/**
 Inventory Update
Given a 2D array representing the inventory of your store, and another 2D array representing a shipment you have received, return your updated inventory.

Each element in the arrays will have the format: [quantity, "item"], where quantity is an integer and "item" is a string.
Update items in the inventory by adding the quantity of any matching items from the shipment.
If a received item does not exist in the current inventory, add it as a new entry to the end of the inventory.
Return inventory in the order it was given with new items at the end in the order they appear in the shipment.
For example, given an inventory of [[2, "apples"], [5, "bananas"]] and a shipment of [[1, "apples"], [3, "bananas"]], return [[3, "apples"], [8, "bananas"]].

Tests
1. updateInventory([[2, "apples"], [5, "bananas"]], [[1, "apples"], [3, "bananas"]]) should return [[3, "apples"], [8, "bananas"]].
2. updateInventory([[2, "apples"], [5, "bananas"]], [[1, "apples"], [3, "bananas"], [4, "oranges"]]) should return [[3, "apples"], [8, "bananas"], [4, "oranges"]].
3. updateInventory([], [[10, "apples"], [30, "bananas"], [20, "oranges"]]) should return [[10, "apples"], [30, "bananas"], [20, "oranges"]].
4. updateInventory([[0, "Bowling Ball"], [0, "Dirty Socks"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]) should return [[1, "Bowling Ball"], [0, "Dirty Socks"], [1, "Hair Pin"], [0, "Microphone"], [1, "Half-Eaten Apple"], [1, "Toothpaste"]].
 */

describe("Inventory Update", () => {
  it("should update inventory with matching items", () => {
    const inventory = [
      [2, "apples"],
      [5, "bananas"],
    ];
    const shipment = [
      [1, "apples"],
      [3, "bananas"],
    ];
    const expected = [
      [3, "apples"],
      [8, "bananas"],
    ];
    expect(updateInventory(inventory, shipment)).toEqual(expected);
  });

  it("should add new items from shipment to inventory", () => {
    const inventory = [
      [2, "apples"],
      [5, "bananas"],
    ];
    const shipment = [
      [1, "apples"],
      [3, "bananas"],
      [4, "oranges"],
    ];
    const expected = [
      [3, "apples"],
      [8, "bananas"],
      [4, "oranges"],
    ];
    expect(updateInventory(inventory, shipment)).toEqual(expected);
  });

  it("should handle empty inventory", () => {
    const inventory = [];
    const shipment = [
      [10, "apples"],
      [30, "bananas"],
      [20, "oranges"],
    ];
    const expected = [
      [10, "apples"],
      [30, "bananas"],
      [20, "oranges"],
    ];
    expect(updateInventory(inventory, shipment)).toEqual(expected);
  });
  it("should handle zero quantity items in inventory", () => {
    const inventory = [
      [0, "Bowling Ball"],
      [0, "Dirty Socks"],
      [0, "Hair Pin"],
      [0, "Microphone"],
    ];
    const shipment = [
      [1, "Hair Pin"],
      [1, "Half-Eaten Apple"],
      [1, "Bowling Ball"],
      [1, "Toothpaste"],
    ];
    const expected = [
      [1, "Bowling Ball"],
      [0, "Dirty Socks"],
      [1, "Hair Pin"],
      [0, "Microphone"],
      [1, "Half-Eaten Apple"],
      [1, "Toothpaste"],
    ];
    expect(updateInventory(inventory, shipment)).toEqual(expected);
  });
});
