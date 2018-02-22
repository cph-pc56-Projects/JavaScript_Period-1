"use strict";
function personLogger(person) {
    var str = "\n        ********************\n        ID: " + person.id + "\n        Name: " + person.firstName + " " + person.lastName + "\n        PHONE: " + person.landLine + "\n        ********************\n    ";
    return str;
}
var p1 = {
    id: 1,
    firstName: "Kurt",
    lastName: "Wuggenut",
    email: "bla@bla",
    landLine: "1212121"
};
console.log(personLogger(p1));
//# sourceMappingURL=C:/Users/trez_/Documents/VSCode/Full Stack JavaScript - Spring 18/Period 1/TypeScript/build/interface.js.map