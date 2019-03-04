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


// Traversing the DOM with jQuery

// next
$("#contact-methods").next().css({border: "3px solid red"});

// prev
$("#social-nav").prev().css({border: "3px solid red"});

// parent
$(".banner-title").parent().css({border: "3px solid pink"});

// children
$("#social-nav").children().css({border: "3px solid pink"});

// find
$("#contact").find(".facebook").css({border: "3px solid purple"});

// closest
$("#social-nav").closest(".wrapper").css({border: "3px solid orange"});


// chaining - that just speed up the code production
// it has the ability to chain together multipule functions or methods on a particular
// set of jquery objects or element that we grab from the page in one line of code and 
// chaining them together using a dot syntax

$("#contact-methods").css({border: "2px solid red"})
    .next().css({border: "2px solid green"})
    .closest$("section").css({border: "2px solid blue"});


// some code to pull in my latest twitter tweet
var tweet = "<div style='margin: 20px 0; padding= 10px; background: #eee'>The big fight live: Han vs Cheese:</div>";

// adding and changing content

// .append() adds content to the bottom of the element
$("#tweets div").append(tweet);

// .prepend() adds content to the top of element
$("#tweets div").prepend(tweet);

// .before() adds content before the element
$("#tweets div p").before(tweet);

// .after() adds content after the element
$("#tweets div p").after(tweet);

// .html() changes the whole html of the element
$("#tweets div").html(tweet);

// .text() changes the text of an element
$("#tweets div p").text(tweet);

