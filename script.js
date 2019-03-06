/*global $*/

// empty() - empties the inner HTML of an example
$(".button").empty();
$("#points-of-sale").empty();

// remove() - removes the element completely
$(".button").empty();
$("#contact img").empty();


// ** removeAttr() - removes an attribute completely
$("#content img").removeAttr("alt");
console.log($("#content img").removeAttr("alt"));

// ** attr() - can read or set any attribute
$("#content img").attr("alt", "location");
