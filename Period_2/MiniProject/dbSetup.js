

var mongoose = require('mongoose');
const dbURI = "mongodb://miniprojectusr:test@ds213118.mlab.com:13118/miniproject";
mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + dbURI);
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 
