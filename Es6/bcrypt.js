const bcrypt = require('bcrypt')

let user = {
    name: "Ashwini",
    email: "ashwiniramesh111@gmail.com",
    password: "ashwinigopi",
    cc: 123412341234,
    cvv: 123
}

//convert user sensitive data to hashed format.

let salt = bcrypt.getsaltsync(10);
let new_cc = bcrypt.hashsync(user.cc, salt);


console.log(user.cc);
console.log(new_cc);