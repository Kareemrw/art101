// lab.js - Creating a function gives you a Hogwarts House
// Author: Kareem Wellington <krwellin@ucsc.edu>
// Date: 5/23/2024

// sortingHat - Takes a string and sorts it into a Hogwarts House
function sortingHat(str) {
  const houseArray = ["Gryffindor","Ravenclaw", "Slytherin", "Hufflepuff"];
  let length = str.length;
  let mod = length % 4;
  return houseArray[mod];
}
$("#submit").click(function () {
  // get value of input field
  const name = $("#input").val();
  const house = sortingHat(name);
  // append a new div to our output div
  $("#output").html('<div class="text"><p> The Sorting Hat has sorted you into '+ house + '</p></div>');
});