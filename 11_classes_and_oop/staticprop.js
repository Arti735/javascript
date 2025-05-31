class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
        
    }
    creatId(){
        return`132`
    }
}

const arti = new User ("arti")
// console.log((arti.creatId()));

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher ("iphone","i@phone.com")
console.log(iphone.creatId());
