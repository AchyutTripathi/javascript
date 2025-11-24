let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2 + 2); 
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 ** 2); 
// console.log(2 % 2);


let str1 = "Hello";
let str2 = " Achyut";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2); // "12": when one operand is string, + operator performs concatenation
// console.log(1 + "2"); // "12"
// console.log("1" + "2"); // "12"
// console.log("1" + 2 + 2); // "122": from left to right, first 1+2 = "12", then "12"+2 = "122"
// console.log(1 + 2 + "2"); // "32": from left to right, first 1+2 = 3, then 3+"2" = "32"

// console.log("Hello" - " World"); // NaN: subtraction operator is not defined for strings
// console.log("5" - "2"); // 3: when both operands are strings, - operator performs subtraction after converting them to numbers
// console.log("5" * "2"); // 10
// console.log("10" / "2"); // 5


// console.log(+true); // 1: unary + operator converts boolean to number
// console.log(+false); // 0
// console.log(+"")


let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
++gameCounter;
// console.log(gameCounter);



let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
