const mongoose = require('mongoose');
const dbURI = "mongodb://pcatana:calarashi@ds111299.mlab.com:11299/mydb";
mongoose.connect(dbURI);

mongoose.connection.on('connected', () => console.log("Connected"));
mongoose.connection.on('error', () => console.log("Uuups!"));
