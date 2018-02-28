var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express in tha club', name: 'Petru Catana' });
});

module.exports = router;
