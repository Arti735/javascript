class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new Course was addded by ${this.username}`);
        
    }
}

const chai = new Teacher("chai","arti@123gmai.com","12347")

chai.addCourse()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);