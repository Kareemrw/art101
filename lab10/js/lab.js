// lab.js - This simple JavaScript/jQuery script appends new elements to an output div
// Author: Kareem Wellington <krwellin@ucsc.edu>
// Date: 5/16/2024

//creating a function that creates random text

function generateRandomText() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}


// click listener for button
$("#make-convo").click(function() {
  // get new fake dialogue
  const newText = generateRandomText();
  // append a new div to our output div
    $("#output").append('<div class="text-left"><p>' + newText + '</p></div>');
});

// adding a listener for the text input
$("#send-text").click(function() {
  // get the value from the text input
  let inputValue = $('#text-input').val(); 
  // checking if something is typed into the input field
  if (inputValue) {
    // appending the input to the div
    $("#output").append('<div class="text-right"><p>' + inputValue + '</p></div>');
    // clear the input field 
    $('#text-input').val(''); 
  }
});
