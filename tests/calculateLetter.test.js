import { describe, it, expect } from "vitest";
import calculateLetter from "../src/scripts/calculateLetter";

describe('calculateLetter', () => {
    it('should return right value if input is valid', () => {
        expect(calculateLetter(425676)).toBe("S");
        expect(calculateLetter(2524411)).toBe("T");
        expect(calculateLetter(81324883)).toBe("B");
        expect(calculateLetter(332)).toBe("X");
        expect(calculateLetter(99999999)).toBe("R");
    })

})