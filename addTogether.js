/* Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined. */

function addTogether() {
  function isNumber(num) {
    if (typeof num !== 'number') {
      return false;
    }
    else return num;
  }
  
  if (arguments.length > 1) {  // check for two arguments
    var a = isNumber(arguments[0]);
    var b = isNumber(arguments[1]);
    if (a === false || b === false) {
      return undefined;
     } else {
       return a + b;
     }  
  } else { // if single argument, use closure for second function
     var c = isNumber(arguments[0]);
    if (isNumber(c)) {
      return function(arg) {
        if (c === false || isNumber(arg) === false) { //check arguments
          return undefined;
        }
        else return c + arg;
      };
    }
  }
}