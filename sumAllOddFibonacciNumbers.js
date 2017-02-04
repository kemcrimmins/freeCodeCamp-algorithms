function sumFibs(num) {
  /*Given a positive integer num, return the sum of all odd Fibonacci numbers 
  that are less than or equal to num.*/
  var fibonacciNumbers = [1, 1];
  var nextFibonacci = 0;
  var sum = 0;
  // genarate array of all figbonacci numbers less than num
  while (nextFibonacci < num) {
    nextFibonacci = fibonacciNumbers[fibonacciNumbers.length -1] + fibonacciNumbers[fibonacciNumbers.length -2];
    if (nextFibonacci <= num){
      fibonacciNumbers.push(nextFibonacci);
    }   
  }

  // add all odd fibonacciNumbers less than num
  for (var i = 0; i < fibonacciNumbers.length; i++) {
    if (fibonacciNumbers[i]%2 !== 0) {
      sum = sum + fibonacciNumbers[i];
    }
  }
  return sum;
}
