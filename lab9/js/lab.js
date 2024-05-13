// lab.js - using jquery to add buttons that interact with the stylesheet
// Author: Kareem Wellington <krwellin@ucsc.edu>
// Date: 5/12/2024

// creating the button for each special-ections
$(".special-sections").append("<button class='make-special'>Make Special</button>");

// adding a click event listener to all buttons with the special-sections class
$(".special-sections button").click(function(){
    // Toggling the special class when button is clicked
    $(this).parent().toggleClass("special");
});