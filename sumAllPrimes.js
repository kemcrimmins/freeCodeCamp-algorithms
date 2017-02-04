/*Sum all the prime numbers up to and including the provided number.*/
function isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}

function sumPrimes(num) {
  var primeNumbers = [];
  for (var i = 2; i <= num; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }
  
  console.log(primeNumbers);
  
  var sum = 0;
  for (var k = 0; k < primeNumbers.length; k++) {
    sum += primeNumbers[k];
  }

  return sum;
}
