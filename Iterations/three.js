// for of loop

// ["", "", ""] // strings in array
// [{}, {}, {}] // objects in array

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

const greetings = "HelloWorld!"
for (const greet of greetings) {
   // console.log(`Each char is ${greet}`);
}



//Maps: holds key value pair, values are unique no repeted values and remains in same order as we enter

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")

// console.log(map)

// for (const [key, value] of map) {
//     console.log(key, ':-', value)
// }


const myObj = {
    'game1': 'NFS',
    'game2': 'Spiderman',
    'game3': 'Mario'
}

// for (const [key, value] of myObj) {
//     console.log(key, ':-', value)
// }

//** for off loop does not work in objects