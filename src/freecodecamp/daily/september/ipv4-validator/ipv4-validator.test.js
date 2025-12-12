import isValidIPv4 from "./ipv4-validator";
import { describe, it, expect } from "vitest";
/**
 IPv4 Validator
Given a string, determine if it is a valid IPv4 Address. A valid IPv4 address consists of four integer numbers separated by dots (.). Each number must satisfy the following conditions:

It is between 0 and 255 inclusive.
It does not have leading zeros (e.g. 0 is allowed, 01 is not).
Only numeric characters are allowed.
Tests
1. isValidIPv4("192.168.1.1") should return true.
2. isValidIPv4("0.0.0.0") should return true.
3. isValidIPv4("255.01.50.111") should return false.
4. isValidIPv4("255.00.50.111") should return false.
5. isValidIPv4("256.101.50.115") should return false.
6. isValidIPv4("192.168.101.") should return false.
7. isValidIPv4("192168145213") should return false.
 */

describe("Ipv4 Validator", () => {
  it('should return true for "192.168.1.1"', () => {
    expect(isValidIPv4("192.168.1.1")).toBe(true);
  });

  it('should return true for "0.0.0.0"', () => {
    expect(isValidIPv4("0.0.0.0")).toBe(true);
  });

  it('should return false for "255.01.50.111"', () => {
    expect(isValidIPv4("255.01.50.111")).toBe(false);
  });

  it('should return false for "255.00.50.111"', () => {
    expect(isValidIPv4("255.00.50.111")).toBe(false);
  });

  it('should return false for "256.101.50.115"', () => {
    expect(isValidIPv4("256.101.50.115")).toBe(false);
  });

  it('should return false for "192.168.101."', () => {
    expect(isValidIPv4("192.168.101.")).toBe(false);
  });

  it('should return false for "192168145213"', () => {
    expect(isValidIPv4("192168145213")).toBe(false);
  });
});
