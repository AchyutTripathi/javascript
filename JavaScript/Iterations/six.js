//const arr = ["js", "rb", "py", "java", "cpp"]


// const values = arr.forEach(item => {
//     //console.log(item);
//     return item; // forEach does not return anything
// })

// console.log(values);


//filter function
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNum.filter( (num) => num > 5) // returns array of numbers greater than 5 but in filter function you have to assign it to a variable
// console.log(newNums)



// if u are using the scope ' {} ', then u have to write the return keyword
// const newNums = myNum.filter(num => {
//     return num > 5
// })

// console.log(newNums);



// if u wanted to use for each loop for returning, without using filter fun

// const newNums = []

// myNum.forEach(num => {
//     if (num > 5) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);



const books = [
    {
        title: 'Book One', gerne: 'Fiction', publish: 1981, edition: 2004 
    },
    {
        title: 'Book Two', gerne: 'Non-Fiction', publish: 1992, edition: 2008 
    },
    {
        title: 'Book Three', gerne: 'History', publish: 1999, edition: 2007 
    },
    {
        title: 'Book Four', gerne: 'Non-Fiction', publish: 1989, edition: 2010 
    },
    {
        title: 'Book Five', gerne: 'Science', publish: 2009, edition: 2014 
    },
    {
        title: 'Book Six', gerne: 'Fiction', publish: 1987, edition: 2010 
    },
    {
        title: 'Book Seven', gerne: 'History', publish: 1986, edition: 1996 
    },
    {
        title: 'Book Eight', gerne: 'Science', publish: 2011, edition: 2016 
    },
    {
        title: 'Book Nine', gerne: 'Non-Fiction', publish: 1981, edition: 1989 
    },
];


let userBooks = books.filter (bk => bk.gerne === 'History')

userBooks = books.filter (bk => bk.publish >= 1995)

userBooks = books.filter (bk => bk.publish >= 1995 && bk.gerne === 'History')


console.log(userBooks);


