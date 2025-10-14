/**
 * FreeCodeCamp Problem: Stellar Classification
 * Difficulty: Easy
 * Topics: Functions, Conditionals
 *
 * October 4th marks the beginning of World Space Week. The next seven days will bring you astronomy-themed coding challenges.
 *
 * For today's challenge, you are given the surface temperature of a star in Kelvin (K) and need to determine its stellar classification based on the following ranges:
 *
 * "O": 30,000 K or higher
 *
 * "B": 10,000 K - 29,999 K
 *
 * "A": 7,500 K - 9,999 K
 *
 * "F": 6,000 K - 7,499 K
 *
 * "G": 5,200 K - 5,999 K
 *
 * "K": 3,700 K - 5,199 K
 *
 * "M": 0 K - 3,699 K
 *
 * Return the classification of the given star.
 *
 * Tests
 * Waiting:1. classification(5778) should return "G".
 * Waiting:2. classification(2400) should return "M".
 * Waiting:3. classification(9999) should return "A".
 * Waiting:4. classification(3700) should return "K".
 * Waiting:5. classification(3699) should return "M".
 * Waiting:6. classification(210000) should return "O".
 * Waiting:7. classification(6000) should return "F".
 * Waiting:8. classification(11432) should return "B".
 */
import { describe, it, expect } from "vitest";
import stellarClassification from "./stellar-classification.js";

describe("Stellar Classification", () => {
  // Tests para clasificación estelar basados en temperatura en Kelvin

  it('stellarClassification(5778) debe retornar "G" (estrella como el Sol)', () => {
    // Rango G: 5,200 K - 5,999 K
    expect(stellarClassification(5778)).toBe("G");
  });

  it('stellarClassification(2400) debe retornar "M" (enanas rojas)', () => {
    // Rango M: 0 K - 3,699 K
    expect(stellarClassification(2400)).toBe("M");
  });

  it('stellarClassification(9999) debe retornar "A" (estrellas blancas)', () => {
    // Rango A: 7,500 K - 9,999 K
    expect(stellarClassification(9999)).toBe("A");
  });

  it('stellarClassification(3700) debe retornar "K" (estrellas naranjas)', () => {
    // Rango K: 3,700 K - 5,199 K
    expect(stellarClassification(3700)).toBe("K");
  });

  it('stellarClassification(3699) debe retornar "M" (límite inferior del rango K)', () => {
    // Rango M: 0 K - 3,699 K (3699 está justo en el límite)
    expect(stellarClassification(3699)).toBe("M");
  });

  it('stellarClassification(210000) debe retornar "O" (estrellas azules masivas)', () => {
    // Rango O: 30,000 K o superior
    expect(stellarClassification(210000)).toBe("O");
  });

  it('stellarClassification(6000) debe retornar "F" (estrellas blanco-amarillas)', () => {
    // Rango F: 6,000 K - 7,499 K
    expect(stellarClassification(6000)).toBe("F");
  });

  it('stellarClassification(11432) debe retornar "B" (estrellas azul-blancas)', () => {
    // Rango B: 10,000 K - 29,999 K
    expect(stellarClassification(11432)).toBe("B");
  });
});
