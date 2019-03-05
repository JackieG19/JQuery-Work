/*global $*/

// empty() - empties the inner HTML of an example
$(".button").empty();
$("#points-of-sale").empty();

// remove() - removes the element completely
$(".button").empty();
$("#contact img").empty();




// $("section").wrap("<div>");

// unwrap() - unwrap all matched elements 
//$("section").unwrap();

// wrapAll() - wrap all elements combined with 1 single element
// $("section").wrapAll("<div>");

var wrapper = "<div class='wrapper'>";
var button = $(".button");
var wrapped = true;

button[0].onclick = function(){
  if(wrapped){
      $("section").unwrap();
      wrapped = false;
      button.text("Wrap");
  }
  
  else{
      $("section").wrapAll(wrapper);
      wrapped = true;
      button.text("Unwrap");
  }
};
