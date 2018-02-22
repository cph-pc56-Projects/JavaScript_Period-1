"use strict";
var theFunction = function (first, second, third) {
    var array = [];
    array.push(first);
    array.push(second);
    array.push(third);
    return array.map(function (x) { return x.toUpperCase(); });
};
console.log(theFunction("first", "second", "third"));
//# sourceMappingURL=C:/Users/trez_/Documents/VSCode/Full Stack JavaScript - Spring 18/Period 1/TypeScriptEx/build/4.js.map