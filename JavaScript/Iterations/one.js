//for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element == 5) {
//         console.log("5 is Best number")
//     }
//     // console.log(element);
    
// }




// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer Loop value: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         //console.log(`Inner loop value ${j} and inner loop ${i}`)
//         console.log(i + '*' + j + ' = ' + i*j );
//     }
// }



// let myArray = ["Flash", "Batman", "Superman"]
// console.log(myArray.length);
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element)
    
// }





// break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5) {
//         console.log(`Found fav number ${index}`);
//         break;
//     }
//     console.log(`Value of i is ${index}`);
    
// }




for (let index = 1; index <= 20; index++) {
    if(index == 5) {
        console.log(`Found fav number ${index}`);
        continue;
    }
    console.log(`Value of i is ${index}`);
    
}