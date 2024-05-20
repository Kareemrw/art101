// lab.js - Creating a function that sorts a name 
// Author: Kareem Wellington <krwellin@ucsc.edu>
// Date: 5/19/2024

// sortUserName - takes user input and sorts letters of the name
function anagram(inputString) {
  // splits the username into an array of lowercase strings 
  let nameWordsLower = inputString.toLowerCase().split(' ');

  //splits each string in the array into an array of characters, 
  //sorts the characters and rejoins them into strings
  let wordsSorted = nameWordsLower.map(i => i.split(''));

  // Shuffle the characters of each word randomly
  // Since I have two arrays I have to use a nested for loop
  for (let x = wordsSorted.length - 1; x >= 0; x--) {
    // iterating through one array and shuffling using Fisher-Yates
    for (let i = wordsSorted[x].length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = wordsSorted[x][i];
      wordsSorted[x][i] = wordsSorted[x][j];
      wordsSorted[x][j] = temp;
    }
  }
  let wordsSorted2 = wordsSorted.map(i => i.join(''));
  // Turns the array of strings into one string maintaining spaces
  let sortedName = wordsSorted2.join(' ');
  return sortedName;
}

$("#submit").click(function () {
  // get value of input field
  const userName = $("#user-name").val();
  const userNameSorted = anagram(userName);
  // append a new div to our output div
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
  $("#nametag").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});
