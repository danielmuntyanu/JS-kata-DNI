export default function validateInput (input) {
    // handling null, "", " ", undefined, [], [42], false
    if (
        (!input && input !== 0)  || 
        !["string", "number"].includes(typeof input)
    ) {
        throw new Error("el dato introducido es incorrecto")
    }

    input = Number(input)

    if (
        isNaN(input) || 
        !isFinite(input) ||
        !Number.isInteger(input)
    ) {
        throw new Error("el dato introducido es incorrecto")
    }

    if (input < 0 || input > 99999999) {
        throw new Error("El dato introducido es incorrecto")
    }
}