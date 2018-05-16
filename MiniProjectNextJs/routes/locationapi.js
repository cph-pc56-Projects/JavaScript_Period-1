var express = require('express');
var server = express();
var login = require('../facades/loginFacade');

/* GET users listing. */
server.post('/login', async function (req, res, next) {
    const data = req.body; // with request.body i get everything i've set
    console.log('Data',data);
    try {
        const friends = await login(data.username, data.password, data.longitude, data.location, data.distance);
        res.json(friends);
    }
    catch (err) {
        res.status(403);
        res.json(err);
    }
    res.send('location resource');
});

module.exports = server;
