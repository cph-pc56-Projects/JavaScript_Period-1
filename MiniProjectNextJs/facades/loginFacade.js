var mongoose = require('mongoose');
var User = require('../models/user');
var Position = require('../models/position');


function findFriends(point, distance) {
    return null;
}


async function login(username, password, longitude, latitude, distance) {
    return { friends: [{ "username": "Dummt", "latitude": 0, "longitude": 0 }] }

}

module.exports = login;