// Promises :- promises are used to handle asynchronous operations in JavaScript.
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation.
// It can be in one of three states: pending, fulfilled, or rejected.


const promiseOne = new Promise(function(resolve, reject) {
    //Do an async task
    // DB calls, cryptography, network requests, etc.
    setTimeout(function() {
        console.log("Async task completed");
        resolve();
    }, 1000);
})

promiseOne.then(function(){
    console.log("Promise resolved");
})


// Another promise example with different way
new Promise (function(resolve, reject) {
    setTimeout(function() {
        console.log("Another async task completed");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Another promise resolved");
})


const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({username: "Achyut", email: "abc@example.com"})
    }, 1000)
})


promiseThree.then(function(user){
    // this returns all the value of the promise
    console.log(user);
}) 





const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function (){
        let error = false; // Simulating an error
        if (!error) {
            resolve({username: "Achyut", password: "123456"})
        } else {
            reject("Error: Something went wrong!");
        }
    }, 2000)
})

// Handling the promise with then and catch 
promiseFour.then(user => {
    console.log(user);
    return user.username;
}).then((username) => { // this is known as chaining (then after then)
    console.log("Username is: " + username);
}).catch(function(error) {
    console.error(error);
}).finally(function(){
    console.log("Promise completed, whether resolved or rejected.");
})






const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve("Data fetched successfully");
        } else {
            reject("Error: Unable to fetch data");
        }
    }, 1000)
})

// Consuming the promise using async/await
// async and await are used to handle promises in a more synchronous way
async function consumePromiseFive() {
    const response = await promiseFive
    console.log(response);
}

consumePromiseFive().catch(function(error) {
    console.error(error);
})







// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers();






// writing same function using try-catch
// fetch is a high priority API and will run first
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log("Error: ", error))
