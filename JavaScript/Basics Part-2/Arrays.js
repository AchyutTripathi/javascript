// Declaration of Arrays

const myArr = [0, 1, 2, 3, 4, 5];

const myHeros = ["Superman", "Batman", "Ironman"];


const myArr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);

console.log(myArr[1]);


//+++++++++++++++++++++++ Arrays Methods +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// myArr.push(6); //it will add the element at the end of the array
// myArr.push(7);
// console.log(myArr);


// myArr.pop() //it will remove the last element from the array
// console.log(myArr);


myArr.unshift(6); //it will add the element at the start of the array
console.log(myArr);


myArr.shift(); //it will remove the first element from the array
console.log(myArr);


console.log(myArr.includes(3)); //it will return true if the element is present in the array otherwise false

console.log(myArr.indexOf(3)); //it will return the index of the element in the array


const newArr = myArr.join(); //it will join the elements of the array with the comma and return the string
console.log(newArr);


// SLICE AND SPLICE (IMPORTANT)

console.log("A", myArr);

const myn1 = myArr.slice(1, 3); //it will return the elements from the start index to end index
console.log(myn1);
console.log("B", myArr);



const myn2 = myArr.splice(1, 3); //it will remove the elements from the start index to end index
console.log("C", myArr);
console.log(myn2);


// **NOTE: The slice() method does not change the original array, it returns the new array with the selected elements. The splice() method changes the original array and returns the removed elements.





const marvel_heros = ["Ironman", "Spiderman", "Thor"];
const dc_heros = ["Superman", "Batman", "Flash"];


// Concat Method to merge the arrays
const AllHeros = marvel_heros.concat(dc_heros); //it will merge the two arrays and return the new array
console.log(AllHeros);


// Spread Operator to merge the arrays
const all_new_heros = [...marvel_heros, ...dc_heros]; //it will merge the two arrays and return the new array
console.log(all_new_heros);



const AnothereArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_arr = AnothereArr.flat(Infinity); //it will return the new array by removing the nested arrays
console.log(real_another_arr);


console.log(Array.isArray("Achyut")); //it will return true if the element is an array otherwise false

console.log(Array.from("Achyut")); //it will return the array of the string

console.log(Array.from({name: "Achyut"})) //it will return the array of the object keys and if the key is not present then it will return the empty array



let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //it will return the array of the elements