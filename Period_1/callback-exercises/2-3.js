var array = ["Lars", "Jan", "Peter", "Bo", "Frederik"];


//Writing my own forEach function
function myForEach(callback) {
    for (var i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

//Writing own .filter() function
function myFilter(callback) {
    var newArray = [];
    for (var i = 0; i < this.length; i++) {
        if(callback(this[i]))
            newArray.push(this[i])
    }
    return newArray;
}

//Writing own .map() function;
function myMap(callback) {
    var newArray = [];
    for(var i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]))
    }
    return newArray;
 }

//Adding functions to the array prototype
Array.prototype.myForEach = myForEach;
Array.prototype.myFilter = myFilter;
Array.prototype.myMap = myMap;

var mapp = array.myMap(function (name) {
    return name.toUpperCase();
})
console.log(mapp);












// //Adding myForEach function to the Array.prototype property
// var names = ["Kurt", "Ole", "Fib"];

// function myForEach(callback) {
//     for (var i = 0; i < this.length; i++) {
//         callback(this[i]);
//     }
// }
// Array.prototype.myForEach = myForEach; // Adding my custom forEach to the array prototype

// names.myForEach(function(name) {
//     console.log(name);
// })