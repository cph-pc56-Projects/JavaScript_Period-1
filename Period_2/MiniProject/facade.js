require("./dbSetup.js");

var User = require("./models/user");
var LocationBlog = require("./models/locationBlog");
var Position = require("./models/position");


const users = User.find({}, { firstName: 1, lastName: 1 }, (err, result) => {
    if (err) throw err;
    return result;
});


module.exports = users;





