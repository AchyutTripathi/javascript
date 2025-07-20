
function sayMyName () {
    console.log("A");
    console.log("C");
    console.log("H");
    console.log("Y");
    console.log("U");
    console.log("T");
}

// sayMyName // refferencs

// sayMyName()  // execution 


// function addTwoNumbers (num1, num2){ // num1 and num2 are parameters

//     console.log(num1 + num2);  there is no return statement so the output will be undefined
// }


function addTwoNumbers (num1, num2){ // num1 and num2 are parameters
    
    // let result = num1 + num2;
    // return result // output will be 8

    return num1 + num2;
    
}

const result = addTwoNumbers(3, 5);  //3 and null = arguments

// console.log("Result: ", result);


function loginUserMessage(username = "Sam") {
    if(!username){
        console.log("Please enter a user name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Achyut"));
// console.log(loginUserMessage("Achyut"));


function calculateCartPrice(val1, val2, ...num1){ // ... is a rest operator, it will use when you don't know how much values are there 
    return num1
}

// console.log(calculateCartPrice(200, 500, 700, 6000))

const user = {
    username: "Sam Bahadur",
    price: 199
}

function handleObject(anyobject) {
    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
// handleObject({
//     username: "Sam"
//     prices: 399
// })


const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 800, 1000]));


//++++++++++++++++++++++++++ Scopes +++++++++++++++++++++++


// var c = 300;
let a = 300; // global scope
if (true) {
    let a = 10; // block scoped
    const b = 20
    console.log("INNER: ", a);
}



// console.log(a);
// console.log(b);


// ***windows global scope and node global scope are different




function one(){
    const username = "Achyut"

    function two(){
        const website = "YouTube"
        console.log(username);
    }
    // console.log(website);

    two();
}

// one();

if(true) {
    const Username = "Achyut "
    if(Username === "Achyut ") {
        const website = " YouTube"
        console.log(Username + website);
    }
    // console.log(website);
}
// console.log(Username);



// ++++++++++++++++++++++++ Interesting ++++++++++++++++++++

console.log(addone(5));
function addone(num) {
    return num + 1
}



addTwo(5) // error
const addTwo = function(num) {
    return num + 2
}

