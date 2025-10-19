/**
 * FreeCodeCamp Problem: Calcetines Faltantes
 *
 * Dado un número entero que representa la cantidad de pares de calcetines con los que comenzó
 * y otro número entero que representa cuántos ciclos de lavado ha realizado, devuelva la cantidad
 * de pares de calcetines completos que tiene actualmente utilizando las siguientes restricciones:
 *
 * - Cada 2 ciclos de lavado, se pierde un solo calcetín.
 * - Cada 3 ciclos de lavado, encuentras un solo calcetín faltante.
 * - Cada 5 ciclos de lavado, se desgasta un calcetín y debe desecharse.
 * - Cada 10 ciclos de lavado, compras un par de calcetines.
 * - Nunca puedes tener menos de cero calcetines en total.
 * - Las reglas pueden superponerse. Por ejemplo, en el ciclo de lavado 10, perderás un calcetín,
 *   tirarás otro y comprarás un par nuevo.
 *
 * Devuelve el número de pares completos de calcetines.
 *
 * Ejemplos de prueba:
 * - sockPairs(2, 5) debería regresar 1
 * - sockPairs(1, 2) debería regresar 0
 * - sockPairs(5, 11) debe regresar 4
 * - sockPairs(6, 25) debería regresar 3
 * - sockPairs(1, 8) debería regresar 0
 */

import { it, describe, expect } from "vitest";
import sockPairs from "./calcetines-faltantes.js";

describe("Calcetines Faltantes", () => {
  it("should return 1 for sockPairs(2, 5)", () => {
    expect(sockPairs(2, 5)).toBe(1);
  });
  it("should return 0 for sockPairs(1, 2)", () => {
    expect(sockPairs(1, 2)).toBe(0);
  });
  it("should return 4 for sockPairs(5, 11)", () => {
    expect(sockPairs(5, 11)).toBe(4);
  });
  it("should return 3 for sockPairs(6, 25)", () => {
    expect(sockPairs(6, 25)).toBe(3);
  });
  it("should return 0 for sockPairs(1, 8)", () => {
    expect(sockPairs(1, 8)).toBe(0);
  });
});
