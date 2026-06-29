import { describe, it, expect, beforeEach } from "vitest";

describe('main', () => {
    beforeEach(() => {
        location.reload()
    }, 1000)

    it("should give the user opportunity to process again if they don't click 'cancel'", () => {
        const calcBtn = document.querySelector("#calculateBtn");
        const numberInput = document.querySelector("#numberInput");
        const resultLabel = document.querySelector("#result");

        // First process
        numberInput.textContent = "123456789101112";
        calcBtn.click();

        // Second process
        numberInput.textContent = "2524411"
        calcBtn.click();

        expect(resultLabel.textContent).toContain("T")
    })

    it("should cancel the program if user click 'cancel'", () => {
        const mainSection = document.querySelector("#mainSection");
        const cancelBtn = document.querySelector("#cancelBtn");

        cancelBtn.click();
        expect(mainSection.innerHTML).toContain("Program cancelled. Good buy!")
    })


})