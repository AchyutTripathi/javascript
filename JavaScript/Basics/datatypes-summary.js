// Primitives Datatypes: Number, String, Boolean, Null, Undefined, Symbol, BigInt

const score =  100;
const scoreValue = 100.33;

const isLoggedin = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId); // false: Symbol creates unique values

const bigIntValue = 5234567890123456789012345678901234567890n; // n is used to define BigInt
// console.log(bigIntValue);



// Reference Datatypes (Non - Primitive Datatypes): Array, Object,Function

const heros = ["Superman", "Batman", "Spiderman", "Ironman", "Thor"];

let myObj = {
    name: "Achyut",
    age: 21,
}

const myFunction = function () {
    // console.log("Hello World");
}

// console.log(typeof outSideTemp); // object: null is a primitive datatype but it is considered as an object in javascript

// console.log(typeof scoreValue); // number: number can be integer or float










// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (Primitive Datatypes), Heap (Reference Datatypes)

let myYouTubeName = "AchyutTripathiDotCom";

let anotherName = myYouTubeName;
anotherName = "AchyutTripathi";

console.log(myYouTubeName);
console.log(anotherName);

let userOne = {
    email: "user@gmail.col",
    upi: "user@upi",
}

let userTwo = userOne;

userTwo.email = "achyut@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);

// **NOTE: In case of primitive datatypes, the value is stored in the stack and in case of reference datatypes, the reference is stored in the stack and the value is stored in the heap. So, when we change the value of the reference, the value of the original object also changes.