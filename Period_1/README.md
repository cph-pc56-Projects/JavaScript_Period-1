# Period 1
### Explain differences between Java and JavaScript
Java is a statically typed compiled langauge. JavaScript is a dynaically typed interpreted scripting language. I.E. JavaScript doesn't need to be compiled in order to run on a machine.  
JavaScript runs mostly in browser on their javascript engine. Also, the language can run independently with the help of Node runtime. 
### Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript.
First strategy of ES6 + ES7 is adding features to the JavaScript language itself. These features coming from ECMASCRIPT foundation first. In ES6/ES7 we see introductions:  
 * Arrow functions
 * Template Literals
 * Promises
 * Block scoped constructs "let" and "const"
 * Classes
 * Modules

These allow for more advanced and organized development in JavaScript.   

TypeScript - a static typed superset of JavaScript that compiles to plain JavaScript. TypeScript transpiles back to javascript so it can run on every JS machine.  
Benefits of TypeScript:  
 * Early detection of programming mistakes
 * Prevents run time failures
 * Easier readbility
 * Easier to maintain
 * Easily used for larger projects/enterprise applications.  

### Explain generally about node.js, and when it “makes sense” and npm, and how it “fits” into the node echo system.
Node.js is a JavaScript runtime built on Chrome's V8 JS engine. Node.js uses an event driven, non blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, "npm", is the largest ecosystem of open source libraries in the world. 

With NPM, one can source specifc libraries for specific purposes form the ecosystem. This in turn, allows for a reuse of tools. NPM gives you an idea that you don't have to reinvent the wheel in terms of tools. 

### Explain about the Event Loop in Node.js
Node.js' event loop purpose is to organize the tasks given. Especially the ones that need asynchronous operations. I.E. the callback operatinos. 
### Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises
Babel allow to transpile modern JavaScript (ES6/ES7) into ES5. 
So, for example with babel I can write arrow functions and have it transpile my functions into old javascript:  
``` javascript
var array = arr.map(e => e +1); // ES6  

var array = arr.map(function(e) {
    return e + 1;
}) // ES5
```
Webpack is a js static module bundler. Webpack takes modules with dependencies and generates static assets representing those modules. 
### Explain the purpose of “use strict” and also Linters, exemplified with ESLint 
"use strict"; defines that JavaScript code should be executed in "strict mode". With this mode on, one cannot use undeclared variables. It allows to write 'secure' code. Secure mode doesn't allow bad syntax. Like ``` (4 + 5) ```. If you mistype a global variable it will throw an error. 
Linters are a tool for examining the quiality of the code and warning for bugs or syntax error. 
### Variable/function-Hoisting
Hoisting is JavaScripts default behaviour of moving declarations to the top. JavaScript does not support block scoping. Variable definitions are not scoped to their nearest enclosing statement or block as in Java, but rather to their containing function. 
```javascript
x = 5;
elem = document.getElementById('demo'); // Find an element
elem.innherHTML = x;// display x in the element
var x; //Declare x
```
    Here x is first inititalzed, then is assigned to the "elem" and then at the end it is declared. 
    So, through hoisting, javascript declares the variable for us. However, this is not reccomended. As it may lead to bugs. 
So, rule of thumb is to always declare variables at the beginning of every scope. 
Hoising functions:
```javascript
hoisted();
function hoisted() {
    //stuff
}
```
    The above code works, as js reads the function definition first and then it is instantiated.
Nevertheless, function expressions are not hoisted. ```const hoisted = function() {};```
### ```this``` in JavaScript and how it differs from what we know from Java/.net.
In JavaScript ```this``` always refers to the 'owner' of the function we're executing, or rather, to the object that a function is a method of.  
In the global execution context(outside of any function) ```this``` refers to the global object whether in strict mode or not.  
Whenever a function is called by a preceeding dot, the object before that dot is ```this```.   
Whenever a constructor function is used, ```this``` refers to the specific instance of the object that is created and returned by the constructor function.  
In Java, ```this``` refers to the current instance object on which the method is executed.    

So, in JS ```this``` assumes more roles than in Java.

### Function Closures and the JavaScript Module Pattern
You can think of closure as a way to "remember" and continue to access a function's scope (it's variables) even once the function has finished running. 
```javascript
function makeAdder(x) {
    function add(y) {
        return y + x;
    }
    return add;/// <--- This returns the function definition to where it is going to be called. So, if I create a function: var x = makeAdder(10); then x now is a function of add() that need the 'y' parameter to be finalized. 
}
```
Module patterns allow for creating private methods in functions. They are a good design pattern to consider when building applications. Also, the moduel pattern is goood for performance. It minifies really well, which makes downloading the code faster. 

### Immediately-Invoked Function Expressions (IIFE)
IIFE's or self invoking functions is a pattern to make a function ivoke itself. IIFE's can be used to avoid variable hoisting from within blocks, protect against polluting the global environemnt and simultaneosly allow public access to methods while retaining privacy for variables defined within the function. 
Example:
```javascript
(function() {
    console.log('Hi');
})(); // Both function expression and invokation are enclosed in parantheses.
```
### JavaScripts Prototype
Prototypes allows to simulate classes in javascript by allowing to add global functions to a certain object. EX: ```.map()``` is a prototpe function of array object. any instance of array can invoke this function. Prototype allows us to to this to our own special object we create. And add oor own global functions to our special objects.    
All objects in JavaScript are desencded from Object. All objects inherit methods and properties from ```Object.prototype```, altough they may be overriden. For example, other constructor' prototypes override the constructor property and provide their own ```toString()``` methods. 
### User defined Callback Functions
Example:
```javascript
//Writing own .map() function;
function myMap(callback) {
    var newArray = [];
    for(var i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]))
    }
    return newArray;
 }

//Adding functions to the array prototype
Array.prototype.myMap = myMap;

var mapp = array.myMap(function (name) {
    return name.toUpperCase();
})
console.log(mapp);
```
### Explain the methods map, filter and reduce
```.map()``` method iterates through every element of the array, creating a new array with values that have been notified by the callback function and return it.   
```.filter()``` method is used to iterate through an array and filter out elements given a condition.    
```reduce()``` method is used to iterate through an array and condense it into onve value. The accumulator is the total that reduce keeps track of after each operation. The current value is just the next element in the array you're iterating through. 
```javascript
var singleVal = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0) // <-- making the accumulator start at zero. The starting object. 
```
### Provide examples of user defined reusable modules implemented in Node.js
[example](https://www.journaldev.com/7608/how-to-create-node-js-reusable-modules).   This is hardcore