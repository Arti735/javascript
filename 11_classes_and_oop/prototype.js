// let myName ="Arti   "
// let myTitale ="Yadav   "

// console.log(myName.truelength);

let myHeros=["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman:"sling",

    getSpidermanPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Arti=function(){
    console.log(`Arti is present in all object`)
}
Array.prototype.heyArti=function(){
    console.log(`Arti say hello`)
}

// heroPower.Arti()
myHeros.Arti()
myHeros.heyArti()
// heroPower.heyArti()

//inheritance

const User = {
    name: "chai",
    email: "arti@gmail.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
   isAvaliable: false
}
const TASupporrt = {
    makeAssigment: `js assigment`,
   fullTime: true,
   __proto__:TeachingSupport
}

Teacher.__proto__=User

//modern syntex

Object.setPrototypeOf(TeachingSupport,Teacher)
let anotherUsername = "chaiAurCode       "

String.prototype.trueLength =function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"arti".trueLength()
"icetea".trueLength()
