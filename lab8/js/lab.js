// lab.js - Testing anon functions and callbacks
// Author: Kareem Wellington <krwellin@ucsc.edu>
// Date: 5/5/2024

// square root function
function squareRoot(x) { 
  return x ** (1/2);
}

// printing results into console
console.log('The square root of 64 is ', squareRoot(64));
console.log('The square root fo 159 is ', squareRoot(159));

// creating an array and printing into console
array = [123, 81, 9, 102, 36, 16];
console.log("My array ", array);

// taking the square root of the array
let result = array.map(squareRoot);
console.log("Square root of my array: ", result)

// finding the square of my array
let result2 = array.map(function (x){
  return x ** 2;
});
console.log('The array squared: ', result2);

let mapResults = 'My array '+ array + 
  '\n\nSquare root of my array: ' + result +
  '\n\nThe array squared: ' + result2;
$("#output").html(mapResults);

