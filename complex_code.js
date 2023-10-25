/*
   Filename: complex_code.js
   Description: A complex and elaborate JavaScript code example.
*/

// Helper function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

// An array to store the generated random numbers
const numbers = [];

// Generate 100 random numbers and store them in the 'numbers' array
for (let i = 0; i < 100; i++) {
   const randomNumber = getRandomNumber(1, 1000);
   numbers.push(randomNumber);
}

// Sort the 'numbers' array in ascending order
numbers.sort((a, b) => a - b);

// Calculate the sum of all numbers in the 'numbers' array
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// Calculate the average of all numbers in the 'numbers' array
const average = sum / numbers.length;

// Find the maximum and minimum number in the 'numbers' array
const maximum = Math.max(...numbers);
const minimum = Math.min(...numbers);

// Create an object to store statistical information
const statistics = {
   totalCount: numbers.length,
   sum,
   average,
   maximum,
   minimum
};

// Output the statistical information
console.log("Total Numbers:", statistics.totalCount);
console.log("Sum:", statistics.sum);
console.log("Average:", statistics.average);
console.log("Maximum:", statistics.maximum);
console.log("Minimum:", statistics.minimum);

// Find all prime numbers in the 'numbers' array
const primeNumbers = numbers.filter(number => {
   if (number < 2) {
      return false;
   }
   for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
         return false;
      }
   }
   return true;
});

// Output the prime numbers
console.log("Prime Numbers:", primeNumbers);

// Calculate the factorial of a given number
function factorial(n) {
   if (n < 0) {
      return;
   }
   if (n === 0 || n === 1) {
      return 1;
   }
   let result = 1;
   for (let i = 2; i <= n; i++) {
      result *= i;
   }
   return result;
}

console.log("Factorial of 5:", factorial(5));

// Generate a Fibonacci sequence up to a certain number of terms
function generateFibonacciSequence(numTerms) {
   const fibonacciSequence = [0, 1];
   for (let i = 2; i < numTerms; i++) {
      const nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
      fibonacciSequence.push(nextTerm);
   }
   return fibonacciSequence;
}

console.log("Fibonacci Sequence:", generateFibonacciSequence(10));

// Perform a binary search on the 'numbers' array
function binarySearch(array, target) {
   let startIndex = 0;
   let endIndex = array.length - 1;
   while (startIndex <= endIndex) {
      const middleIndex = Math.floor((startIndex + endIndex) / 2);
      if (array[middleIndex] === target) {
         return middleIndex;
      }
      if (array[middleIndex] < target) {
         startIndex = middleIndex + 1;
      } else {
         endIndex = middleIndex - 1;
      }
   }
   return -1;
}

console.log("Binary Search Result:", binarySearch(numbers, 42));

// And so on... continue adding more complex and elaborate functionality as needed