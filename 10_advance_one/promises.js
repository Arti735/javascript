// fetch('hhtps://somthing.com').then().catch().finally()

const promiseone = new Promise(function(resolve,reject){
    //Do a async task
    //DB calls,cryptography ,network
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    },1000)
})

promiseone.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000);
}).then(function(){
    console.log("Asynk 2 resolve");
})

const promiseThree = new  Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "arti",email: "arti@123gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true
        if(!error){
            resolve({username: "arti",password: "123"})
        }else{
            reject('Error:Somthing went wrong')
        }
    },1000)
})

  promiseFour
  .then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promise is either resolve or rejected"))


const promiseFive = new Promise(function(resolve,reject){

      setTimeout(function(){
        let error =false
        if(!error){
            resolve({username: "js",password: "123"})
        }else{
            reject('Error:js went wrong')
        }
    },1000)
})


async function consumePromisFive() {
   try {
    const response = await promiseFive 
    console.log(response) ;
   } catch (error) {
    console.log(error);
   }
}

consumePromisFive()

// async function getAllUser() {
//  try {
//         const response = await fetch('http://jsonplaceholder.typiconde.com/user')

//     const data= await response.json()
//     console.log(data)
//  } catch (error) {
//     console.log("E:",error);
//  };
// }

// getAllUser()

 fetch('http://jsonplaceholder.typiconde.com/user')
 .then((response)=>{
    return response.json()
 })
 .then((data)=>{
    console.log(data);
 })
 .catch((error)=> console.log(error))