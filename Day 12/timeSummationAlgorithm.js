//  block of code that sums the number from 1-10,100 using reduce method and time it using console.time and console.timeEnd

let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

console.time('Summation Time');

let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.timeEnd('Summation Time');

console.log('Sum from 1 to 100 is:', sum);