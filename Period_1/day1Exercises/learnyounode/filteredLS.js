var fs = require('fs');
var path = require('path');

var place = process.argv[2];
var ext = "."+process.argv[3];

fs.readdir(place, 'utf8', function(err, list) {
    if (err)
        console.log(err);
    var array = list;
    array = array.filter(function(name) {
        return path.extname(name) == ext;
    })
    var result;
    array.forEach(function(line) {
        result += line + '\n';
        return result;
    })
    console.log(result);

});

