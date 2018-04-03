var mongoose = require('mongoose');
const dbURI = "mongodb://pcatana:calarashi@ds121299.mlab.com:21299/miniproject";
mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + dbURI);
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 
