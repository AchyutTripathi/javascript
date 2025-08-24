class User{
    constructor(username) {
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    // we use static when we don't want to give access of this method to instance 
    static createId(){
        return `123`
    }
}

const Achyut = new User("Achyut")
// console.log(Achyut.createId())


class Teacher extends User{
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe();
console.log(iphone.createId()); // error