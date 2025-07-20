// if

//const isUserLoggedIn = true
// const temp = 41

// if(temp === 41){
//     console.log("Less than 50")
// } else {
//     console.log("Greater than 50")
// }




// const score = 200

// if (score > 100){
//     const power = "Fly"
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`); // error




//Short-hand notation

// const balance = 1000

// if(balance > 500) console.log("Test"), console.log("Test 2") // don't write code like this


//nesting

// if(balance < 500) {
//     console.log("Less than 500");

// } else if(balance < 750) {
//     console.log("Less Than 750");

// } else if(balance < 900) {
//     console.log("Less Than 900");
    
// } else {
//     console.log("Less than 1200")
// }



//Multiple condition to check
const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if(userLoggedIn && debitCard) {
    console.log("Allow to buy Courses")
}

if(LoggedInFromGoogle || LoggedInFromEmail) {
    console.log("User Logged In");
}