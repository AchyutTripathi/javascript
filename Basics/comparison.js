// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1); // true: "2" is converted to number 2 before comparison
console.log("02" > 1); // true: "02" is converted to number 2 before comparison

console.log(null == 0); // false: null is only loosely equal to undefined
console.log(null >= 0); // true: null is converted to 0 in numeric comparison
console.log(null > 0);  // false: null is converted to 0 in numeric comparison


console.log(undefined == 0); // false: undefined is only loosely equal to null
console.log(undefined >= 0); // false: undefined is converted to NaN in numeric comparison
console.log(undefined > 0);  // false: undefined is converted to NaN in numeric comparison


// **NOTE: Comparison and Equality check are two different things. Comparison checks the value and type of the operands, whereas equality check only checks the value of the operands.




// **NOTE: from line 12 to line 19 we avoid these type of comparison because it is not a good practice to compare different types of data. It is better to convert the data to the same type and then compare them.




// === strict equality check (checks value and datatype)
console.log("2" === 2); // false: string and number are of different types