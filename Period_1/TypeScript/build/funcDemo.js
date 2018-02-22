"use strict";
function hello(firstName, lastName, role) {
    var temp = "Hello " + firstName + " " + lastName;
    temp += (role) ? " your role is: " + role + "." : ".";
    console.log(temp);
}
var Person = (function () {
    function Person(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    Person.prototype.sayHelloEventually = function () {
        var _this = this;
        setTimeout(function () {
            console.log("Hi " + _this.fName + " " + _this.lName);
        }, 3000);
    };
    return Person;
}());
var p = new Person("Petru", "Catana");
p.sayHelloEventually();
//# sourceMappingURL=C:/Users/trez_/Documents/VSCode/Full Stack JavaScript - Spring 18/Period 1/TypeScript/build/funcDemo.js.map