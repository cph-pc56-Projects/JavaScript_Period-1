require("./dbSetup.js");

var User = require("./models/user");



// User.find({}, { _id: 0, firstName: 1, lastName: 1 }, (err, result) => {
//     if (err) throw err;
//     console.log("Result from MongoDB", result);
//     return result;
// });



exports.getUsers = function (req, res) {
    User.find({}, { _id: 0, firstName: 1, lastName: 1 }, (err, result) => {
        if (err) throw err;
        // console.log("Result from MongoDB", result);
        res.send(result);
    });
}




