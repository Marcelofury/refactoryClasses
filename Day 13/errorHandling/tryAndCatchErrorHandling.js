//tryAndCatchErrorHandling.js
function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

try {
    console.log(divideNumbers(10, 0));
} catch (error) {
    console.error("An error occurred: " + error.message);
}   