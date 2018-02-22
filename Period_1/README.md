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
So, for example. With babel i can write arrow functions and have it transpile my funciton into old javascript:  
``` javascript
var array = arr.map(e => e +1); // ES6  

var array = arr.map(function(e) {
    return e + 1;
}) // ES5
```
Webpack is a js static module bundler. Webpack takes modules with dependencies and generates static assets representing those modules. 