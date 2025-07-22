// let myName = "Achyut      ";

// console.log(myName.length); // 12
// console.log(myName.trim().length); // 6 


let myHeros = ["Batman", "Superman", "Spiderman", "Ironman"];

let heroPower = {
    batman: "Intelligence",
    superman: "Strength",
    spiderman: "Agility",
    ironman: "Technology",

    getSpiderPower : function (){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// here we are adding new property in the prototype of the object
Object.prototype.Achyut = function() {
    console.log(`Achyut is present in all objects`);
}


Array.prototype.heyAchyut = function () {
    console.log(`Achyut says Hello`);
}

// heroPower.Achyut()
myHeros.Achyut();
myHeros.heyAchyut();
// heroPower.heyAchyut();



// Inheritance in JavaScript
const user = {
    userName: "Achyut",
    email: "abc@gmail.com"
}
const teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

teacher.__proto__ = user; // teacher inherits from user



// modern way of inheritance
Object.setPrototypeOf(TeachingSupport, teacher); // TeachingSupport inherits from teacher


let anotherName = "Achyut Tripathi      ";

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}


anotherName.trueLength(); // "Achyut Tripathi      " -> True length is: 15

"Achyut Tripathi".trueLength()
"iceTea".trueLength()