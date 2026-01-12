//Promise is an object that represents the eventual completion (or failure) of 
// an asynchronous operation and its resulting value.

// Creating a Promise
let promise = new Promise((resolve,reject) => {
    let success = true; // Simulating success or failure
    if(success){
        resolve("Operation was successful!");
    }else{
        reject("Operation failed.");
    }

})
// Consuming a Promise
promise.then((message) => {
    console.log("Success: " + message);
}).catch((error) => {
    console.log("Error: " + error);
});


