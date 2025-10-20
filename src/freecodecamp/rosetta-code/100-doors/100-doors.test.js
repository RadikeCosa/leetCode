/**
 * FreeCodeCamp Problem: 100 Doors
 *
 * There are 100 doors in a row that are all initially closed. You make 100 passes by the doors.
 * The first time through, visit every door and 'toggle' the door (if the door is closed, open it;
 * if it is open, close it). The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...)
 * and toggle it. The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc.,
 * until you only visit the 100th door.
 *
 * Implement a function to determine the state of the doors after the last pass.
 * Return the final result in an array, with only the door number included in the array if it is open.
 *
 * Casos de ejemplo para implementar:
 *
 * 1. Caso básico - 1 puerta:
 *    getFinalOpenedDoors(1) should return [1]
 *    (Solo 1 pasada, puerta 1 se toggle una vez: cerrada → abierta)
 *
 * 2. Caso pequeño - 10 puertas:
 *    getFinalOpenedDoors(10) should return [1, 4, 9]
 *    (Cuadrados perfectos hasta 10: 1², 2², 3²)
 *
 * 3. Caso mediano - 25 puertas:
 *    getFinalOpenedDoors(25) should return [1, 4, 9, 16, 25]
 *    (Cuadrados perfectos hasta 25: 1², 2², 3², 4², 5²)
 *
 * 4. Caso clásico - 100 puertas:
 *    getFinalOpenedDoors(100) should return [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
 *    (Los 10 cuadrados perfectos del 1 al 100)
 *
 * 5. Caso edge - 0 puertas:
 *    getFinalOpenedDoors(0) should return []
 *    (Sin puertas, array vacío)
 *
 * Patrón matemático: Solo las puertas en posiciones de cuadrados perfectos quedan abiertas,
 * porque son los únicos números con cantidad impar de divisores.
 */

import { describe, it, expect } from "vitest";
import getFinalOpenedDoors, {
  getFinalOpenedDoorsSimulation,
  getFinalOpenedDoorsOptimized,
} from "./100-doors.js";

describe("100 Doors", () => {
  // Casos de prueba compartidos
  const testCases = [
    { input: 0, expected: [] },
    { input: 1, expected: [1] },
    { input: 10, expected: [1, 4, 9] },
    { input: 25, expected: [1, 4, 9, 16, 25] },
    { input: 100, expected: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100] },
  ];

  describe("Función Principal (Optimizada)", () => {
    testCases.forEach(({ input, expected }) => {
      it(`should return ${JSON.stringify(
        expected
      )} for getFinalOpenedDoors(${input})`, () => {
        expect(getFinalOpenedDoors(input)).toEqual(expected);
      });
    });
  });

  describe("Versión Simulación O(n²)", () => {
    testCases.forEach(({ input, expected }) => {
      it(`should return ${JSON.stringify(
        expected
      )} for getFinalOpenedDoorsSimulation(${input})`, () => {
        expect(getFinalOpenedDoorsSimulation(input)).toEqual(expected);
      });
    });
  });

  describe("Versión Optimizada O(√n)", () => {
    testCases.forEach(({ input, expected }) => {
      it(`should return ${JSON.stringify(
        expected
      )} for getFinalOpenedDoorsOptimized(${input})`, () => {
        expect(getFinalOpenedDoorsOptimized(input)).toEqual(expected);
      });
    });
  });

  describe("Comparación de Ambas Implementaciones", () => {
    it("both implementations should produce identical results for all test cases", () => {
      testCases.forEach(({ input }) => {
        const simulationResult = getFinalOpenedDoorsSimulation(input);
        const optimizedResult = getFinalOpenedDoorsOptimized(input);
        expect(simulationResult).toEqual(optimizedResult);
      });
    });
  });
});
