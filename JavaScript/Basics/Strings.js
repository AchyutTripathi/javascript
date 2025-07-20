const name = "Achyut";
const repoCount = 20;

// console.log(name + " has " + repoCount + " repositories on GitHub"); //dont use this method


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //this method is called String Interpolation and use this method


const gameName = new String("Counter-Strike");

console.log(gameName[0]);
// console.log(gameName.__proto__); //String

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('S'));


const newString = gameName.substring(0, 7); //end index will not be included and will not support negative values
console.log(newString);


const newString1 = gameName.slice(-9, -4); // we can use negative values also and it will start from the end
console.log(newString1);


const newString2 = gameName.split('-'); //it will split the string and return an array
console.log(newString2);


const newString3 = gameName.replace('Counter', 'Valorant'); //it will replace the first occurence of the string
console.log(newString3);


const newString4 = "    Hello World    ";
console.log(newString4);
console.log(newString4.trim()); //it will remove the extra spaces from the string


console.log(newString4.includes('Hello')); //it will return true if the string is present in the string


