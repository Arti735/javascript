//primitive

// 7 type : String,Number, Boolean,null,undefined,Symble,BigInt


const scor =100
const soceValue = 100.3
const isLoggedIn=false
const outsideTem = null
let userEmail;

const id =Symbol('123')
const anotherId=Symbol('123')

console.log(id == anotherId);

const bigNumber =9847847282847284728n

//Reference (Non primitive)

//Array ,Object,Functions

const heros=["Arti","Aarti","Yadav"];
let myObj ={
    name:"Arti",
    age: 22,
}

const myFunction =function(){
    console.log("hello world")
}

console.log(typeof myFunction);