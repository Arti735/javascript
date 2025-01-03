
// var c =200
let a=300
if(true){
    let a=10
    const b=20
    // console.log("INNER:",a)

}

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// console.log(a)
// console.log(b)
// console.log(a)

function one(){
    const username = "Arti"

    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website)

    two()
}

// one()

if (true){
    const username="Arti"
    if(username=="Arti"){
        const website=" youtube"
        // console.log(username + website);

    }
    // console.log(website);
}
// console.log(username);

//++++++++++++++++++++++ interesting +++++++++++
addone(5)
function addone(num){
    return num +1
}

addTwo(5)
const addTwo= function addone(num){
    return num +2
}

