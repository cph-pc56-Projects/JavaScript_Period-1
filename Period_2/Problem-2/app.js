var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('express-handlebars'); // ADD HBS for HANDLEBARS
var session = require('express-session');
var validator = require('express-validator');

var index = require('./routes/index');
var jokes = require('./model/jokes');

var app = express();

var urlEncodedParser = bodyParser.urlencoded({ extended: false });

// view engine setup
app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + "/views/layouts/" })); // add ENGINE to see HANDLEBARS. 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'secret_3162735', saveUninitialized: true, resave: true }));

app.use(function (req, res, next) {
  if(req.session == !null) {
    res.redirect('jokes');       
  } else {
    req.url = '/';
    return next();
  }  
})

app.use('/', index);
app.post('/storeJoke', urlEncodedParser, function (req, res) {
  var data = req.body;
  jokes.addJoke(data.joke);
  res.redirect("/add")

})


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
