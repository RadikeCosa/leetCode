import daylightHours from "./daylight-hours";

/**
 * TODO: Add complete problem statement here
 *
 * Problem statement word-for-word:
 * - [ ] Add problem description
 * - [ ] Add all examples
 * - [ ] Add all constraints
 * - [ ] Add hints if they exist
 * - [ ] Add tags and difficulty
 */

describe("Daylight Hours", () => {
  // Casos base: latitudes exactas de la tabla
  // Casos base: latitudes exactas de la tabla oficial FCC
  it("devuelve 24 para latitud -90", () => {
    expect(daylightHours(-90)).toBe(24);
  });
  it("devuelve 23 para latitud -75", () => {
    expect(daylightHours(-75)).toBe(23);
  });
  it("devuelve 21 para latitud -60", () => {
    expect(daylightHours(-60)).toBe(21);
  });
  it("devuelve 15 para latitud -45", () => {
    expect(daylightHours(-45)).toBe(15);
  });
  it("devuelve 13 para latitud -30", () => {
    expect(daylightHours(-30)).toBe(13);
  });
  it("devuelve 12 para latitud -15", () => {
    expect(daylightHours(-15)).toBe(12);
  });
  it("devuelve 12 para latitud 0", () => {
    expect(daylightHours(0)).toBe(12);
  });
  it("devuelve 11 para latitud 15", () => {
    expect(daylightHours(15)).toBe(11);
  });
  it("devuelve 10 para latitud 30", () => {
    expect(daylightHours(30)).toBe(10);
  });
  it("devuelve 9 para latitud 45", () => {
    expect(daylightHours(45)).toBe(9);
  });
  it("devuelve 6 para latitud 60", () => {
    expect(daylightHours(60)).toBe(6);
  });
  it("devuelve 2 para latitud 75", () => {
    expect(daylightHours(75)).toBe(2);
  });
  it("devuelve 0 para latitud 90", () => {
    expect(daylightHours(90)).toBe(0);
  });

  // Casos intermedios: latitudes entre valores de la tabla
  it("devuelve 15 para latitud -44 (más cerca de -45)", () => {
    expect(daylightHours(-44)).toBe(15);
  });
  it("devuelve 12 para latitud -10 (más cerca de -15 y 0)", () => {
    expect(daylightHours(-10)).toBe(12);
  });
  it("devuelve 10 para latitud 23 (más cerca de 30)", () => {
    expect(daylightHours(23)).toBe(10);
  });
  it("devuelve 0 para latitud 88 (más cerca de 90)", () => {
    expect(daylightHours(88)).toBe(0);
  });
  it("devuelve 13 para latitud -33 (más cerca de -30)", () => {
    expect(daylightHours(-33)).toBe(13);
  });
  it("devuelve 2 para latitud 70 (más cerca de 75)", () => {
    expect(daylightHours(70)).toBe(2);
  });
  it("devuelve 21 para latitud -61 (más cerca de -60)", () => {
    expect(daylightHours(-61)).toBe(21);
  });
  it("devuelve 9 para latitud 46 (más cerca de 45)", () => {
    expect(daylightHours(46)).toBe(9);
  });
  it("devuelve 24 para latitud -89.9 (más cerca de -90)", () => {
    expect(daylightHours(-89.9)).toBe(24);
  });
  it("devuelve 0 para latitud 89.9 (más cerca de 90)", () => {
    expect(daylightHours(89.9)).toBe(0);
  });
  it("devuelve 0 para latitud 89.9 (más cerca de 90)", () => {
    expect(daylightHours(89.9)).toBe(0);
  });
});
