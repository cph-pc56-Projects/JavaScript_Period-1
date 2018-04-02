const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const dbURI = "mongodb://pcatana:calarashi@ds121299.mlab.com:21299/miniproject";
const mongoDB = mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + dbURI);
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});


app.prepare()
    .then(() => {
        const server = express();

        server.use((req, res, next) => {
            req.mongoDB = mongoDB;            
            next();
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        });

        server.listen(3000, (err) => {
            if (err) throw err;
            console.log('> Ready on http://localhost:3000');
        });        
        
       

    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1);
    });
