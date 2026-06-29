import { describe, it, expect } from "vitest";
import calculateLetter from "../src/scripts/calculateLetter";

describe('calculateLetter', () => {
    it('should return "S" if entered "425676"', () => {
        expect(calculateLetter(425676)).toBe("S");
    })
    it('should return "T" if entered "2524411"', () => {
        expect(calculateLetter(2524411)).toBe("T");
    })
    it('should return "B" if entered "81324883"', () => {
        expect(calculateLetter(81324883)).toBe("B");
    })
    it('should return "X" if entered "332"', () => {
        expect(calculateLetter(332)).toBe("X");
    })
    it('should return "R" if entered "99999999"', () => {
        expect(calculateLetter(99999999)).toBe("R");
    })
})