const User = {
    _email: 'abc@gmail.com',
    _password: 'abcd',

    get email() {
        return this._email.toUpperCase();
    },

    set email(newEmail) {
        this._email = newEmail;
    }
}

const tea = Object.create(User);
console.log(tea.email);