"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = (function () {
    function Person(name, email) {
        this.email = email;
        this.id = Person.nextId++;
        this._name = name;
    }
    Object.defineProperty(Person.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getName", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setName", {
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Person.nextId = 100;
    return Person;
}());
var p2 = new Person("Peter", "pet@cat.com");
console.log("Name: " + p2.getName + ", ID: " + p2.getId);
var p3 = new Person("Jack", "pet@cat.com");
console.log("Name: " + p3.getName + ", ID: " + p3.getId);
//# sourceMappingURL=C:/Users/trez_/Documents/VSCode/Full Stack JavaScript - Spring 18/Period 1/TypeScript/build/classDemo.js.map