// lab.js - Creating a Fizz Buzz Boom function
// Author: Kareem Wellington <krwellin@ucsc.edu>
// Date: 5/26/2024

// fizzBuzz - Loops from 1 - 100 checking if each number is a multiple of 3, 5, or 7
function fizzBuzz() {
  let oneLongString = "";
  // looping from 1 to 100
  for (i=1; i <= 100; i++) {
    oneLongString += i + " ";
    // added a boolean to check if number is fizz buzz or boom
    let fizzBuzzBoom = false;
    if (i % 3 == 0){
      oneLongString += "Fizz";
      fizzBuzzBoom = true;
    }
    if (i % 5 == 0){
      oneLongString += "Buzz";
      fizzBuzzBoom = true;
    }
    if (i % 7 == 0){
      oneLongString += "Boom";
      fizzBuzzBoom = true;
    }
    // adds an exclemation mark if it fizz buzzes or booms
    if (fizzBuzzBoom == true){
      oneLongString += "!<br>";
    }
    else {
      oneLongString+= "<br>";
    }
  }
  $("#output").html(oneLongString);
}
fizzBuzz();

