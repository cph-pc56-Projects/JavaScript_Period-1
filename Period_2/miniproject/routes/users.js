var express = require('express');
var router = express.Router();
var userFacade = require('../facades/userFacade');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = userFacade.getAllUsers();
  console.log("users", users);
  res.send('users');
});

module.exports = router;
