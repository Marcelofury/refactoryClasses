//rangeError.js
function createArray(size) {
    if (size < 0 || size > 1000) {
        throw new RangeError("Size must be between 0 and 1000");
    }
    return new Array(size);
}

createArray(2000); // This will throw a RangeError because the size is out of range