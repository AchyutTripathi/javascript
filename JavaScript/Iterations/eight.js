// reduce method

const myNum = [1, 2, 3, 4, 5]

// const myTotal = myNum.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0) // 0 is the initial value of acc & whatever value we assign to it after ',' that will be the initial value of acc



// using Arrow function
const myTotal = myNum.reduce( (acc, carrval) => acc + carrval, 0)

console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "java course",
        price: 888
    },
    {
        itemName: "python course",
        price: 1500
    },
    {
        itemName: "c++ course",
        price: 799
    },
]

const PriceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(PriceToPay);