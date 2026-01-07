function inputToNumber(input) {
    const num = Number(input);
//if result is Nan, throw error  try catch and log it
}
 try {
        if (isNaN(num)) {
            throw new Error("Invalid number input");
        }
        return num;
    } catch (error) {
        console.error("An error occurred: " , error.message);
    }


   
console.log(inputToNumber("500k"));
