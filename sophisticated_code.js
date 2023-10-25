/*
Filename: sophisticated_code.js
Content: Complex numerical operations
*/

// Helper function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
}

// Function to generate Fibonacci sequence up to a given length
function generateFibonacciSequence(length) {
  const sequence = [];
  
  let a = 0, b = 1;
  while (sequence.length < length) {
    sequence.push(a);
    [a, b] = [b, a + b];
  }
  
  return sequence;
}

// Function to calculate factorial of a number
function calculateFactorial(n) {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Calculate the sum of digits of a number
function sumOfDigits(num) {
  let sum = 0;
  while (num !== 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

// Generate a random number within a given range
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to retrieve the n-th prime number
function getNthPrime(n) {
  let count = 0, num = 1;
  while (count < n) {
    num++;
    if (isPrime(num)) count++;
  }
  return num;
}

// Generate an array of prime numbers up to a given limit
function generatePrimeNumbers(limit) {
  const primes = [];
  let num = 2;
  while (primes.length < limit) {
    if (isPrime(num)) primes.push(num);
    num++;
  }
  return primes;
}

// Example usage
console.log("Generating Fibonacci sequence of length 10:");
console.log(generateFibonacciSequence(10));

console.log("\nCalculating factorial of 5:");
console.log(calculateFactorial(5));

console.log("\nCalculating sum of digits in 12345:");
console.log(sumOfDigits(12345));

console.log("\nGenerating a random number between 1 and 100:");
console.log(generateRandomNumber(1, 100));

console.log("\nFinding the 10th prime number:");
console.log(getNthPrime(10));

console.log("\nGenerating an array of first 5 prime numbers:");
console.log(generatePrimeNumbers(5));
    
// ... (more code)