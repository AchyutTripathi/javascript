// const userEmail = "achyut@123.com"

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email")
// }


// const userEmail = ""
// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email")
// }



const userEmail = []
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email")
}





// Falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN



// Truthy values
// true, [], "0", 'false', " ", {}, function(){}


// if (userEmail.length === 0) {
//     console.log("Array is empty");
// } // to check array in if condition


// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// } // to check object is empty or not




// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 // 5
// val1 = null ?? 10 // 10
// val1 = undefined ?? 15; // 15
val1 = null ?? 10 ?? 15

console.log(val1)




// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("More than 80") : console.log("Less than 80")


//***Summary: Truthy values are values that are considered true when encountered in a Boolean context. Falsy values are values that are considered false when encountered in a Boolean context.