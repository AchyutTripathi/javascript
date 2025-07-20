const user = {
    username: "Achyut",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`) // this is used to reffer the current context 
        // console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);


// function coffee(){
//     let username = "Achyut"
//     console.log(this.username);  // cannot use this keyword in function
// }

// coffee()


// const coffee = function(){
//     let username = "Achyut"
//     console.log(this.username);
// }

// coffee()


const coffee = () => {
    let username = "Achyut"
    console.log(this);
}

// coffee()



//++++++++++++++++++++++++++++++++ Arrow functions ++++++++++++++++++++++++++++++++



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4));



// const addTwo = (num1, num2) => num1 + num2 // implicit return (no need to write return statement)

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Achyut"}) //u cannot return object without using () outside {}

console.log(addTwo(3, 4));

// ***Note: When u are using {} u have to write return statement and with () u don't have to write return statement



