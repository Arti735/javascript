// const coding =["js","ruby","java","python","cpp"]

// const values =coding.forEach( (item)=>{
//         console.log(item);
//         return item
// } )
// console.log(values);

const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums= myNums.filter( (num)=>{
//    return num>4
// })

// const newNums =[]

// myNums.forEach(  (num)=> {
//     if(num>4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books=[
    {title:'Booke One',genre:'Fiction',publish:1981,edition:2004},

    {title:'Booke Two',genre:'Non-Fiction',publish:1985,edition:2006},

    {title:'Booke Three',genre:'History',publish:1999,edition:2008},

    {title:'Booke Four',genre:'Non-Fiction',publish:1993,edition:2009},

    {title:'Booke five',genre:'Science',publish:1994,edition:2010},

    {title:'Booke six',genre:'History',publish:1995,edition:2011},


];
let userBooks= books.filter( (bk)=>bk.genre ==='History' )

 userBooks= books.filter( (bk)=>{
     return bk.publish >=2000  && bk.genre ==="History"

 })

console.log(userBooks);

