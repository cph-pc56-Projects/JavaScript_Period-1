require('./db');
const mongoose = require('mongoose');
const User = require('./models/User');

let user1 = new User({
    firstName: "Peter",
    lastName: "The Reaper",
    password: "1234"
});

user1.save((err, data) => {
    if (err)
        console.log("UPPS" + err.message);
    console.log(data.fullinfo + ", " + data.password);
});

User.findOne({firstName: "Peter"})
    .then( data => console.log(data))
    .then(err => console.log(err))
    