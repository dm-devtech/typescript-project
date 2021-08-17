"use strict";
function filterByTerm(input, searchTerm) {
    if (!searchTerm)
        throw Error("searchTerm cannot be empty");
    if (!input.length)
        throw Error("inputArr cannot be empty");
    var regex = new RegExp(searchTerm, "i");
    return input.filter(function (arrayElement) {
        return arrayElement.url.match(regex);
    });
}
var obj1 = { url: "string 1" };
var obj2 = { url: "string 2" };
var obj3 = { url: "string 3" };
var arrOfLinks = [obj1, obj2, obj3];
var term = "java";
filterByTerm(arrOfLinks, term);
