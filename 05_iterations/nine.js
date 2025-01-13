const myNums =[1,2,3]

// const myTotal =myNums.reduce(function(acc,currval){
//     console.log(`acc${acc}and currval:${currval}`);
//     return acc + currval
// } ,0)

const myTotal=myNums.reduce( (acc,curr)=>acc+curr,0 )

console.log(myTotal);

const shoppingCart=[
    {
        itemName : "js Course",
        price:2999
    },
    {
        itemName : "python Course",
        price:999
    },
    {
        itemName : "java Course",
        price:3999
    },
    {
        itemName : "mobile dev Course",
        price:5999
    },
    {
        itemName : "data science Course",
        price:12999
    },
   
 
]

const priceToPay= shoppingCart.reduce( (acc,item)=>acc + item.price,0 )
console.log(priceToPay);