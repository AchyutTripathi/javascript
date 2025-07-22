// Object literals

const user = {
    userName: "Achyut",
    loginCount: 8,
    signedIn: true,
    getUserDeails: function() {
        //console.log("Got user details");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}


console.log(user.userName)
// console.log(user.getUserDeails());
// console.log(this);




// Constructor Function
function User (userName, loginCount, isLoggedIn) {
    this.userName = userName,
    this.loginCount = loginCount,
    this.LoggedIn = isLoggedIn

    this.greeting = function () {
        console.log (`welcome ${this.userName}`);
    }

    return this;
}

const userOne = new User("Achyut", 8, true);
const userTwo = new User("Tripathi", 5, false);
console.log(userOne.constructor);
console.log(userTwo);


/* New keyword :- 1 - creates a new object
                  2 - constructor function is been called when new keyword is used.
                  3 - this ke andar add ho jayenge aur aapko mil jayenge.
                  4 - return this is optional, if you don't return anything then it will return the newly created object.
*/                  



