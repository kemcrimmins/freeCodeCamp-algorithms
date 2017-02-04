function sumAll(arr) {

//We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
//The lowest number will not always come first.
  var upperValue = Math.max(arr[0], arr[1]);
  var lowerValue = Math.min(arr[0], arr[1]);
  var sum = 0;
  
  for (var i = lowerValue; i < upperValue + 1; i++) {
    sum = sum + i;
  }
  return sum;
  
}