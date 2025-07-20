// for each loop

const arr = ["js", "rb", "py", "java", "cpp"]

// arr.forEach(element => {
//     console.log(element)
// });


// function printMe(item) {
//     console.log(item);
// }

// arr.forEach(printMe)


// arr.forEach((item, index, array)=> {
//     console.log(item, index, array) // returns array-element, index, full-array
// })




const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach(Element => {
    console.log(Element.languageName)
})