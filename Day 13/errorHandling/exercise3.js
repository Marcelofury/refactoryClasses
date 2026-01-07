function inputToNumber(input) {
    const num = Number(input);
//if result is Nan, final error
    try {
        if (isNaN(num)) {
            throw new Error("Invalid number input");
        }
        return num;
    } catch (error) {
        console.error("An error occurred: " , error.message);
    }finally {
        console.log("form input fields have been reset");
    }
}
console.log(inputToNumber("500k"));
