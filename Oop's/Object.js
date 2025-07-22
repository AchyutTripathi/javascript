function multiplyBy5(num) {
    this.num = num; // 'this' refers to the function object itself
    return 5 * num;
}

// function is a first-class object in JavaScript
multiplyBy5.power = 2; // Adding a property to the function object

console.log(multiplyBy5(5)); // 25
console.log(multiplyBy5.power); // undefined
console.log(multiplyBy5.prototype); // {}

function createUser(userName, score) {
    this.userName = userName
    this.score = score
}


createUser.prototype.increment = function () {
    this.score++;
}
createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);


chai.printMe(); // score is 25