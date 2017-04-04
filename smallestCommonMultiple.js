/* Find the smallest common multiple of the provided 
   parameters that can be evenly divided by both, as 
   well as by all sequential numbers in the range between 
   these parameters.

    The range will be an array of two numbers that will 
    not necessarily be in numerical order.

    e.g. for 1 and 3 - find the smallest common multiple 
    of both 1 and 3 that is evenly divisible by all numbers 
    between 1 and 3. */
    
function smallestCommons(arr) {
  function sortNumbers(a, b){
    return b - a;
  }
  
  arr.sort(sortNumbers);
  
  var numArray = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    numArray.push(i);
  }
 
  function gcd(a, b) { 
    /* Euclid's algorithm for determining 
       greatest common denominator */
    var t;
    while (b !== 0) {
      t = b;
      b = a % b;
      a = t;
    }
    return a;
  }
  
  function lcm(a, b){
    /* reduction by greatest common denominator 
       to determine least common multiple */
    return (a * b) / gcd(a, b);
  }
  
  var result = numArray[0];
  for (var j = 1; j < numArray.length; j++) {
  	result = lcm(result, numArray[j]);
  }
  
  return result;
}