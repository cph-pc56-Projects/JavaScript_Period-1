var express = require('express');
var router = express.Router();
var jokes = require("../model/jokes");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HandleBars', success: req.session.success, errors: req.session.errors});
  req.session.errors = null;
  req.session.success = null;
  
});

router.post('/submit', function(req, res, next) {
  req.check('email', 'Invalid email address').isEmail();
  req.check('password', 'Password is invalid').isLength({min: 4}).equals(req.body.confirmPassword);

  var errors = req.validationErrors();
  if (errors) {
    req.session.errors = errors;
    req.session.success = false;
  } else {
    req.session.success = true;   
  }
  res.redirect('jokes');
  
})

router.get('/joke', function(req, res, next) {  
  res.render('joke', {joke: jokes.getRandomJoke()})
})

router.get('/jokes', function(req, res, next){
  res.render('jokes', {jokes: jokes.allJokes()})
})

router.get('/add', function(req, res, next) {
  res.render('addJoke');
  
})

module.exports = router;
