// lab.js - Testing objects and arrays in javascript
// Author: Kareem Wellington <krwellin@ucsc.edu>
// Date: 4/23/2024

//Define Variables

const myTransport = ['foot', 'car', 'bus'];

//Creating an object

const myMainRide = {
  make: "Lexus",
  model: "CT200h",
  year: 2012,
  age: function(){
    return 2024 - this.year;
  }
}

//output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");

//writing the object
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");