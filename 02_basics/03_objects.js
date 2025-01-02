//singleton
//object.create

//object literals

const mySym =Symbol("key1")

const jsUser={
    name:"Arti",
    "full name":"Arti Yadv",
    [mySym]:"mykey1",
    age:23,
    location:"varanasi",
    email:"arti@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]


}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);


jsUser.email ="arti@google.com"
// Object.freeze(jsUser)
jsUser.email="arti@chatgpt.com"
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("hello js user");
}
jsUser.greetingTwo=function(){
    console.log(`hello js user,${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


