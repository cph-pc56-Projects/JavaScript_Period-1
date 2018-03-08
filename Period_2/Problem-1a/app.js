var express = require('express');
var app = express();

//add your content here
app.use("/api/calculator/:operation/:n1/:n2", function (req, res, next) {
    var calculatorRequest = {
        operation: req.params.operation,
        n1: Number(req.params.n1),
        n2: Number(req.params.n2)
    }
    var results = {
        operation: calculatorRequest.operation,
        n1: calculatorRequest.n1,
        n2: calculatorRequest.n2,
        result: null,
    }
    switch (results.operation) {
        case '*':
            results.result = results.n1 * results.n2;
            break;
        case 'd':
            results.result = results.n1 / results.n2;
            break;
        case '+':
            results.result = results.n1 + results.n2;
            break;
        case '-':
            results.result = results.n1 - results.n2;
            break;
        
    }
    res.send(results);
    next();
})

app.get("/api/calculator/*", function (req, res) {

})


app.get('/', function (req, res) {
    res.send("This is a drill!");
})



app.listen(3000, function () {
    console.log("Server started, listenting on: " + 3000);
})