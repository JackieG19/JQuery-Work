/*global $*/

$(document).ready(function(){
    alert("working with jquery");
});

// grabing the h1 tag with the id of logo
$("logo");

var heading = $("logo");

// jquery method in changig the css property of the heading
heading.css({position: "relative"})

// animation method is going to move the heading 100 pixels from the left
heading.animation({left: 100})