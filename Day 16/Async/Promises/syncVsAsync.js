// sync vd async.js
 
console.log("Start of the script"); 
// Synchronous code
function syncFunction() {
    console.log("This is a synchronous function.");
}
syncFunction();

console.log("Before asynchronous operation");
// Asynchronous code using setTimeout
setTimeout(() => {
    console.log("This is an asynchronous operation completed after 2 seconds.");
}, 2000);

console.log("After asynchronous operation");
// Output will be:
// Start of the script
// This is a synchronous function.
// Before asynchronous operation
// After asynchronous operation
// This is an asynchronous operation completed after 2 seconds. 

//difference:
// Synchronous code runs in sequence, blocking further execution until it completes.
// Asynchronous code allows other operations to run while waiting for the async task to finish.