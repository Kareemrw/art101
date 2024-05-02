// lab.js - Creating a function that sorts a name 
// Author: Kareem Wellington <krwellin@ucsc.edu>
// Date: 5/2/2024

// user input
let userName = window.prompt("Please enter your name so I can sort it.");
document.getElementById("username").innerHTML = userName;
// sortUserName - takes user input and sorts letters of the name
function sortUserName(name){
  // splits the username into an array of lowercase strings 
  let nameWordsLower = name.toLowerCase().split(' ');
  //splits each string in the array into an array of characters, 
  //sorts the characters and rejoins them into strings
  let wordsSorted = nameWordsLower.map(i => i.split('').sort().join(''));
  // Turns the array of strings into one string maintaining spaces
  let sortedName = wordsSorted.join(' ');
  return sortedName;
}
// output
document.getElementById("sortedname").innerHTML = "Here's your sorted name: " + sortUserName(userName);