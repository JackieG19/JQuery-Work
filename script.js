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


// changing CSS property of certain elements
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


// Adding & Removing Classes

// removeClass() - removes a class from the matched element(s)
$("header .wrapper", ).removeClass("wrapper");

// addClass() - adds a class to the matched element(s)
$("header > div").addClass("wrapper");
// toggleClass - toggle the class on and off on the matched element(s)


// Binding & Unbinding Events

// on() - binds an event to matched element(s)
// off() - unbinds an event from matched element(s) 

var myLis = $("#points-of-sale li");
myLis.on("click", function(){
  $(this).css({"background": "pink"});
  myLis.off("click");
});


// ** Event Helpers

$("#lead-banner").dblclick(function(){
  alert("you double click me");
  $("#lead-banner").off("dbclick");
});