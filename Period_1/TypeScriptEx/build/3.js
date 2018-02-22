"use strict";
function showInfo(book) {
    return "Title: " + book.title + " Author: " + book.author + " Published: " + book.published + " Pages: " + book.pages;
}
var b = {
    title: "CyberPunk",
    author: "Tim",
};
console.log(b);
var Book = (function () {
    function Book() {
        this.title = "New Frontiers";
        this.author = "A guy";
        this.published = new Date();
        this.pages = 102;
    }
    Object.defineProperty(Book.prototype, "getTitle", {
        get: function () {
            return this.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "getAuthor", {
        get: function () {
            return this.author;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "getPublishedDate", {
        get: function () {
            return this.published;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "getPages", {
        get: function () {
            return this.pages;
        },
        enumerable: true,
        configurable: true
    });
    return Book;
}());
//# sourceMappingURL=C:/Users/trez_/Documents/VSCode/Full Stack JavaScript - Spring 18/Period 1/TypeScriptEx/build/3.js.map