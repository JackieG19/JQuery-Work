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

// grabbing an element in a jquery wrapper and manipulate it further
$("#lead-banner p");

// element selectors
$("h3").css({border: "3xp solid blue"});

// class selectors
$(".wapper").css({border: "3xp solid red"});

// ID selectors
$("#clients").css({border: "3xp solid yellow"});

// filter can be used to refine selectors to make them more specific very much 
// like css psuedo classes. 

// first and last
$("header nav li:first").css({border: "2px solid red"});
$("header nav li:last").css({border: "2px solid red"});

// first-child and last-child
$("#contact ul:first-child").css({border: "2px solid red"});
$("#contact ul:last-child").css({border: "2px solid red"});

// even and odd
$("header nav li:even").css({border: "2px solid blue"});
$("header nav li:odd").css({border: "2px solid yellow"});

// not
$("#section:not ('#contact')").css({border: "2px solid green"});

// lesser than and greater than
$("#social-nav li:lit(3)").css({border: "2px solid blue"});
$("#social-nav li:lit(2)").css({border: "2px solid blue"});

// attribute filters
$("div[class]").css({border: "2px solid pink"});
$("img[alt]").css({border: "2px solid pink"});

$("img[alt=quote]").css({border: "2px solid purple"});

