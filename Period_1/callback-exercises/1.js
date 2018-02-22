// 1
var array = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
var newArray = array.filter(function(person) {
    return person.length <= 3;
})
console.log(newArray);

//2 

var upperedCased = array.map((name) => {
    return name.toUpperCase();
})
console.log(upperedCased);