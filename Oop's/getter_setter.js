class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email (newEmail) {
        this._email = newEmail;
    }
    
    get password() {
        return `${this._password}Achyut`;
    }

    set password(newPassword) {
        this._password = newPassword;
    }
}

const Achyut = new User("achyut123@gmail.com", "abcd")
console.log(Achyut.email);
console.log(Achyut.password);