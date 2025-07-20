// singleton object :- it is an object that has only one instance in the whole application

// objects literals


const mySym = Symbol("key1");

const JsUser = {
    name: "Achyut",
    "full name": "Achyut Tripathi",
    [mySym]: "value", // use [] to get the value of the symbol and without [] the type will be string
    age: 21,
    location: "Kanpur",
    email: "achyut06@google.com",
    isloggedIn: false,
    lastLoginDays: ["Monday", "Satuurday"],
}

console.log(JsUser.email);
console.log(JsUser["location"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);


JsUser.email = "tripathi@google.com";
// Object.freeze(JsUser); //it will freeze the object and we can't change the object properties
JsUser.email = "abc@gmail.com"; //it will not change the email because the object is freezed
console.log(JsUser);


JsUser.greetings = function () {
    console.log("Hello, JS users");
}


JsUser.greetings2 = function () {
    console.log(`Hello, Javascript user, ${this.name}`);
}

console.log(JsUser.greetings); //it will return the function and output will be [Function: (anonymous)]
console.log(JsUser.greetings()); //it will return undefined because the function is not returning anything
console.log(JsUser.greetings2()); //it will return the function and output will be [Function: (anonymous)]


// **NOTE: The this keyword refers to the object it belongs to. and if we use the arrow function then the this keyword will refer to the global object. Prefer to use [] for the symbol key in the object rather than using . notation. 



// const tinderUser = new Object(); // Singleton object
const tinderUser = {}; // non singleton object

tinderUser.id = "123abc";
tinderUser.name = "Aditya";
tinderUser.isloggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Achyut",
            lastname: "Tripathi"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1: "a", 2: "b", 3: "c"};
const obj2 = {4: "d", 5: "e", 6: "f"};

//combine two objects
// const obj3 = Object.assign({}, obj1, obj2); //it will merge the two objects and return the new object

const obj3 = {...obj1, ...obj2}; //it will merge the two objects and return the new object
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "abcd@gmail.com"
    },
    {
        id: 1,
        email: "abcd@gmail.com"
    },
    {
        id: 1,
        email: "abcd@gmail.com"
    },
    {
        id: 1,
        email: "abcd@gmail.com"
    },
    {
        id: 1,
        email: "abcd@gmail.com"
    },
    {
        id: 1,
        email: "abcd@gmail.com"
    },
    {
        id: 1,
        email: "abcd@gmail.com"
    },
]

console.log(users[1].email); 

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isloggedIn'))




//destructuring
const course = {
    coursename: "js in hindi",
    price: "999",
    studentname: "Achyut"
}

// course.studentname

const {studentname: name} = course; // by this way u can change the name of the key

// console.log(studentname);
console.log(name);


// +++++++++++++++++++++++++++++++++++ APIs +++++++++++++++++++++++++++++++++++++++++

// {
//     "name": "Achyut",
//     "coursename": "js in hindi",
//     "price": "free"
// }


[
    {},
    {},
    {}
]