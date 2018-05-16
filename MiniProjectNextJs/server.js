require("./dbSetup.js").connect();
const express = require('express')
const next = require('next')
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const api = require('./routes/api');
const users = require('./routes/users');
const login = require('./routes/locationapi');

app.prepare()
  .then(() => {
    const server = express()
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({extended: false}));
    server.use(cookieParser());

    
    server.use('/api', api);
    server.use('/api', users);
    server.use('/api', login);

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${3000}`)
    })
  })
