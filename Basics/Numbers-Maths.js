const score = 400;
console.log(score);


const balance = new Number(1000);
console.log(balance);

console.log(balance.toString().length);  //it will return the length of the number

console.log(balance.toFixed(2)); //it will return the number with 2 decimal points

const otherNumber = 331.5642;
console.log(otherNumber.toPrecision(3)); //it will return the number with 3 significant digits and return a string


const hundreds = 100000000;
console.log(hundreds.toLocaleString('en-IN')); //it will return the number with commas, write ('en-IN') for Indian format and ('en-US') for US format


console.log(Number.MAX_VALUE); //it will return the maximum value of the number

console.log(Number.MIN_VALUE); //it will return the minimum value of the number

console.log(Number.MAX_SAFE_INTEGER); //it will return the maximum safe integer value  (2 to the power 53 - 1)

console.log(Number.MIN_SAFE_INTEGER); //it will return the minimum safe integer value  (-2 to the power 53 + 1)









// ++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-100)); //it will return the absolute value of the number

console.log(Math.round(7.8)); //it will return the nearest integer value

console.log(Math.ceil(7.1)); //it will return the next integer value

console.log(Math.floor(7.9)); //it will return the previous integer value

console.log(Math.pow(2, 3)); //it will return the power of the number

console.log(Math.sqrt(64)); //it will return the square root of the number

console.log(Math.PI); //it will return the value of PI

console.log(Math.min(1, 2, 3, 4, 5)); //it will return the minimum value from the numbers

console.log(Math.max(1, 2, 3, 4, 5)); //it will return the maximum value from the numbers







//Random Numbers (IMPORTANT)
console.log(Math.random()); //it will return the random number between 0 and 1

console.log(Math.floor(Math.random() * 10) + 1); //it will return the random number between 1 and 10

console.log(Math.ceil(Math.random() * 10) + 1); //it will return the random number between 1 and 10



const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //it will return the random number between 10 and 20


// **NOTE: Math.random() will return the random number between 0 and 1, so we have to multiply it with the range and add the minimum value to get the random number between the range
