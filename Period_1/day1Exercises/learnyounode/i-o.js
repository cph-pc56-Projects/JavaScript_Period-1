//in two line
var fs = require('fs');
var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n').length-1;
console.log(lines);


// my way
// var fs = require('fs');


// // read file from fileSystem(fs) and put the bytecode in buf
// var buf = fs.readFileSync(process.argv[2]);

// var text = buf.toString();
// var array = text.split('\n');
// //console.log(array);
// console.log(array.length-1);
