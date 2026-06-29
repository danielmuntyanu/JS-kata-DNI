import { describe, it, expect } from "vitest";
import validateInput from "../src/scripts/validateInput";

describe("validateInput", () => {
  it("Should no throw an error if input is valid", () => {
    expect(() => validateInput(55555)).not.toThrow();
    expect(() => validateInput(841724)).not.toThrow();
    expect(() => validateInput(123)).not.toThrow();
    expect(() => validateInput(0)).not.toThrow();
    expect(() => validateInput(99999999)).not.toThrow();
  });

  it('Should throw an error if input is not a number', () => {
    expect(() => validateInput("hola")).toThrow("el dato introducido es incorrecto")
    expect(() => validateInput(null)).toThrow("el dato introducido es incorrecto")
    expect(() => validateInput("567abc")).toThrow("el dato introducido es incorrecto")
    expect(() => validateInput([1, 2, 3])).toThrow("el dato introducido es incorrecto")
    expect(() => validateInput(undefined)).toThrow("el dato introducido es incorrecto")
  })

  it('Should throw an error if input is out of range (0 - 99999999)', () => {
    expect(() => validateInput(123456789)).toThrow("El dato introducido es incorrecto")
    expect(() => validateInput(123456789101112)).toThrow("El dato introducido es incorrecto")
    expect(() => validateInput(-1)).toThrow("El dato introducido es incorrecto")
  })
});
