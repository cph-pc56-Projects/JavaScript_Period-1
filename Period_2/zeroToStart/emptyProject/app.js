var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookierParser = require('cookie-parser');
var routes = require('./routes/index');

var app = express();
app.set('views', path.join(__dirname, 'views')); // De default view folder
app.set('view engine', 'jade'); //allow us to leave out the extension

app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(logger('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookierParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', function(req, res) {
//     res.render('index', {title: 'Express'});
    
// });
app.use('/', routes);

var names = [];
app.get('/form', function(req, res) {
    res.send("Hi: " + names.join(', ') + "<form method='post'><input name='name'></form>");
});

app.post('/form', function(req, res) {
    names.push(req.body.name);
    res.redirect('/form');
});
app.post('/names', function(req, res){
    names.push(req.body); // We receive it as a JS object
    console.log(JSON.stringify(req.body));
    res.redirect('/form');
});



//catch all handler for any request that doesn't match any other routes
app.use(function(req, res, next) {
    var err = new Error("Not Found");
    err.status = 404;
    next(err); // it add continuity to te next midleware in the sequence?
})
if (app.get('env') == 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {message: "Sth is wrong", error: err.status })
    })
}

module.exports = app;