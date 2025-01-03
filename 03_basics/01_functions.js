function syMyname(){
    console.log("A")
    console.log("R")
    console.log("T")
    console.log("I")
}

// syMyname()
// function addTwoNumber(number1,number2){
//                 console.log(number1+number2);
// }
 
function addTwoNumber(number1,number2){
                // let result = number1+number2
                // return result
                return number1 + number2
       
}
 
const result = addTwoNumber(3,4)

// console.log("Result",result);

function loginUserMessage(username="syam"){
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Arti"))
// console.log(loginUserMessage())

function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000));

const user={
    username:"Arti",
    price:199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and Price is ${anyObject.price}`)
}
// handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray = [100,200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,300,500,600]));