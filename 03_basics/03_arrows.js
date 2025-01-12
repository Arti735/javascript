const user=
{
    username:"Arti",
    price:299,
welcomeMessage: function(){
    console.log(`${this.username},welcome to website`);
    console.log(this);
}

}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username="Arti"
//     console.log(this.username);
// }
// chai()
// const chai=function(){
//     let username ="Arti"
//     console.log(this.username);
// }
const chai=()=>{
    let username ="Arti"
    console.log(this);
}
// chai()

// const addTwo=(num1, num2)=>{
//     return num1+ num2
// }
// const addTwo=(num1, num2)=> num1+ num2

// const addTwo=(num1, num2)=> (num1+ num2)

const addTwo=(num1, num2)=> ({username:"Arti"})

console.log(addTwo(3,4))

const myArray =[2,3,4,5]

// myArray.forEach()
