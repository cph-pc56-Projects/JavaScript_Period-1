const express = require('express');
const http = require('http');

function add(n1, n2) {
    return n1 + n2;
}

function calcServer(port, serverStartedCB) {
    const app = express();
    app.get('/calc/add/:n1/:n2', (req, res) => {
        let n1 = req.params.n1;
        let n2 = req.params.n2;
        res.send(Number(add(Number(n1), Number(n2))));
    });
    const server = http.createServer(app);
    server.listen(port, () => {
        console.log("Server started at port: " + port);
        serverStartedCB(server);
    });

}

module.exports = {
    add,
    calcServer
};