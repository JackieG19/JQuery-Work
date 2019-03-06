/*global $*/

// empty() - empties the inner HTML of an example
$(".button").empty();
$("#points-of-sale").empty();

// remove() - removes the element completely
$(".button").empty();
$("#contact img").empty();


// removeAttr() - removes an attribute completely
$("#content img").removeAttr("alt");
console.log($("#content img").removeAttr("alt"));

// attr() - can read or set any attribute
$("#content img").attr("alt", "location");


// ** changing CSS property of certain elements

console.log($("#social-nav").css("position"));
$("#social-nav").css("top", "-200px").css("left", "100px");

var myObject = {
  "height": "40",
  "speed": "160"
};

$("#social-nav").css({
  "top": "-400px",
  "left": "150px",
  "opacity": "8.5",
  "border-top": "4px solid red"
});