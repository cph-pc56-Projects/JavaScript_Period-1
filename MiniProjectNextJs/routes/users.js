const express = require('express');
const server = express();
const { getAllUsers, findByUsername } = require('../facades/userFacade');

/* GET users listing. */
server.get('/users', async function (req, res) {
  try {
    const users = await getAllUsers();
    res.send(users);
  }
  catch (err) {
    res.status(403);
    res.json(err);
  }
});

server.get('/user/:username', async (req, res) => {
  try {
    const usrName = req.params.username;    
    const user = await findByUsername(usrName);
    res.send(user);
  }
  catch (err) {
    res.status(403);
    res.json(err)
  }
})

module.exports = server;
