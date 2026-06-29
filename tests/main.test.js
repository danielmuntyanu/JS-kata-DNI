import { describe, it, expect, vi } from "vitest";

const html = `
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
`

vi.mock(
    "../src/scripts/calculateLetter.js", 
    () => ({
        default: () => "T"
    })
);

vi.mock(
    "../src/scripts/validateInput.js", 
    () => ({
        default: () => {}
    })
);

describe('main', async () => {

    document.body.innerHTML = html;
    await import("../src/main.js");

    it("should give the user opportunity to process again if they don't click 'cancel'", () => {
        const calcBtn = document.querySelector("#calculateBtn");
        const numberInput = document.querySelector("#numberInput");
        const resultLabel = document.querySelector("#result");

        // First process
        numberInput.value = "123456789101112";
        calcBtn.click();

        // Second process
        numberInput.value = "2524411"
        calcBtn.click();

        expect(resultLabel.innerHTML).toContain("T")
    })

    it("should cancel the program if user click 'cancel'", () => {
        const mainSection = document.querySelector("#mainSection");
        const cancelBtn = document.querySelector("#cancelBtn");

        cancelBtn.click();
        expect(mainSection.innerHTML).toContain("Program cancelled. Good buy!")
    })


})