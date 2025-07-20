const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// map function
// const newNums = myNum.map(num => num + 10)
// console.log(newNums)



//chaining 
//chaaining is when you use multiple functions one after another
const newNums = myNum
                .map( num => num * 10 )
                .map( num => num + 1 )
                .filter( num => num >= 40)

console.log(newNums);