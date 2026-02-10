/**
 * Lab 4: JavaScript Fundamentals
 * CSC4035 Web Programming and Technologies
 *
 * Complete all the functions below following the JSDoc comments.
 * Run tests with: npm test
 *
 * Check ASSIGNMENT.md for your personalized variant parameters.
 */

// ============================================
// TASK 1: Variables and Data Types
// ============================================

// 1.1 Declare a constant for PI (use 3.14159)
// YOUR CODE HERE


// 1.2 Declare variables for a person's name, age, and isStudent status
// Use appropriate data types
// YOUR CODE HERE


// 1.3 Create an object representing a book with title, author, year, and pages
// YOUR CODE HERE


// 1.4 Create an array of your 5 favorite programming languages
// YOUR CODE HERE



// ============================================
// TASK 2: Operators and Expressions
// ============================================

/**
 * Calculate the area of a circle
 * Formula: PI * radius^2
 * @param {number} radius - The radius of the circle
 * @returns {number} The area of the circle
 */
function calculateCircleArea(radius) {
    // YOUR CODE HERE
}

/**
 * Check if a number is even
 * Hint: Use the modulo operator (%)
 * @param {number} num - The number to check
 * @returns {boolean} True if even, false if odd
 */
function isEven(num) {
    // YOUR CODE HERE
}

/**
 * Check if a person can vote (18+ and is a citizen)
 * @param {number} age - The person's age
 * @param {boolean} isCitizen - Whether the person is a citizen
 * @returns {boolean} True if can vote, false otherwise
 */
function canVote(age, isCitizen) {
    // YOUR CODE HERE
}


// ============================================
// TASK 3: Control Flow
// ============================================

/**
 * Return letter grade based on score
 * 90+ = A, 80-89 = B, 70-79 = C, 60-69 = D, below 60 = F
 * @param {number} score - The numeric score
 * @returns {string} The letter grade
 */
function getGrade(score) {
    // YOUR CODE HERE (use if-else or switch)
}

/**
 * FizzBuzz: Return array of numbers 1 to n, but:
 * - For multiples of 3, use "Fizz"
 * - For multiples of 5, use "Buzz"
 * - For multiples of both, use "FizzBuzz"
 * @param {number} n - The upper limit
 * @returns {Array} Array of numbers and strings
 */
function fizzBuzz(n) {
    // YOUR CODE HERE
}

/**
 * Count how many times a character appears in a string
 * @param {string} str - The string to search
 * @param {string} char - The character to count
 * @returns {number} The count
 */
function countChar(str, char) {
    // YOUR CODE HERE (use a loop)
}


// ============================================
// TASK 4: Functions
// ============================================

/**
 * Calculate factorial of n (n!)
 * n! = n * (n-1) * (n-2) * ... * 1
 * 0! = 1
 * Use recursion
 * @param {number} n - The number
 * @returns {number} The factorial
 */
function factorial(n) {
    // YOUR CODE HERE (use recursion)
}

/**
 * Return a function that adds a specific number
 * This demonstrates closures
 * Example: makeAdder(5)(3) returns 8
 * @param {number} x - The number to add
 * @returns {function} A function that adds x to its argument
 */
function makeAdder(x) {
    // YOUR CODE HERE (return a function)
}

/**
 * Calculate sum of all arguments passed
 * Should work with any number of arguments
 * Example: sum(1, 2, 3) returns 6
 * Example: sum() returns 0
 * @param {...number} numbers - Any number of arguments
 * @returns {number} The sum
 */
function sum(...numbers) {
    // YOUR CODE HERE (use rest parameters)
}


// ============================================
// TASK 5: Arrays
// ============================================

/**
 * Double all numbers in an array
 * Example: [1, 2, 3] => [2, 4, 6]
 * @param {number[]} arr - Array of numbers
 * @returns {number[]} New array with doubled values
 */
function doubleAll(arr) {
    // YOUR CODE HERE (use map)
}

/**
 * Filter to only positive numbers (> 0)
 * Example: [-1, 2, -3, 4, 0] => [2, 4]
 * @param {number[]} arr - Array of numbers
 * @returns {number[]} Array of positive numbers only
 */
function getPositives(arr) {
    // YOUR CODE HERE (use filter)
}

/**
 * Calculate sum of all numbers in array
 * Example: [1, 2, 3, 4, 5] => 15
 * @param {number[]} arr - Array of numbers
 * @returns {number} The sum
 */
function arraySum(arr) {
    // YOUR CODE HERE (use reduce)
}

/**
 * Find the maximum value in an array
 * Example: [3, 1, 4, 1, 5, 9] => 9
 * @param {number[]} arr - Array of numbers
 * @returns {number} The maximum value
 */
function findMax(arr) {
    // YOUR CODE HERE (use reduce or Math.max with spread)
}

/**
 * Remove duplicates from array
 * Example: [1, 2, 2, 3, 3, 3] => [1, 2, 3]
 * @param {Array} arr - Array with possible duplicates
 * @returns {Array} Array with duplicates removed
 */
function removeDuplicates(arr) {
    // YOUR CODE HERE (use Set or filter)
}


// ============================================
// EXPORTS - DO NOT MODIFY
// ============================================
module.exports = {
    calculateCircleArea,
    isEven,
    canVote,
    getGrade,
    fizzBuzz,
    countChar,
    factorial,
    makeAdder,
    sum,
    doubleAll,
    getPositives,
    arraySum,
    findMax,
    removeDuplicates
};
