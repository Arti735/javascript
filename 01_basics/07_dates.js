//Dates

let myDate =new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());

// let myCreateDate = new Date(2023,0,23)
// let myCreateDate = new Date(2023,0,23,5,3)
let myCreateDate = new Date("2023-01-14")
// console.log(myCreateDate.toLocaleDateString());

let myTimeStemp = Date.now()
// console.log(myTimeStemp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate =new Date ()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


// `${newDate.getDate()}` and  the time

newDate.toLocaleDateString('default',{
    weekday:"long",
})