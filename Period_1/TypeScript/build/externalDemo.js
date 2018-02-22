"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = __importDefault(require("node-fetch"));
var URL = 'https://jsonplaceholder.typicode.com/users/1';
node_fetch_1.default(URL)
    .then(function (res) { return res.json(); })
    .then(function (user) { return console.log(user.name); });
//# sourceMappingURL=C:/Users/trez_/Documents/VSCode/Full Stack JavaScript - Spring 18/Period 1/TypeScript/build/externalDemo.js.map