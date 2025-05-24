const user = {
    username:'arti',
    ligingCount:8,
    signedIn:true,

    getUserDetails: function(){
        // console.log("Gote user details from database");
        // console.log(`Username: ${this.username}`)
        // console.log(this)

    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User (username,logingCount,isLoggedIn){
    this.username=username;
    this.ligingCount=logingCount;
    this.isLoggedIn=isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne =new User("arti",12,true)
const userTwo =new User("yadav",13,false) 
console.log(userOne.constructor);
// console.log(userTwo);

