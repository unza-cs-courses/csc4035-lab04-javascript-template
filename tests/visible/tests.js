/**
 * Lab 4: JavaScript Fundamentals - Visible Test Suite
 * CSC4035 Web Programming and Technologies
 *
 * These tests run on every push via GitHub Actions.
 * Additional hidden tests will run after the deadline.
 *
 * DO NOT MODIFY THIS FILE
 * Run with: npm test
 */

const {
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
} = require('../../exercises');

// Test counter
let passed = 0;
let failed = 0;

function test(name, fn) {
    try {
        fn();
        console.log(`✓ ${name}`);
        passed++;
    } catch (e) {
        console.log(`✗ ${name}`);
        console.log(`  Error: ${e.message}`);
        failed++;
    }
}

function assertEqual(actual, expected, message = '') {
    if (actual !== expected) {
        throw new Error(`Expected ${expected}, got ${actual}. ${message}`);
    }
}

function assertDeepEqual(actual, expected, message = '') {
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        throw new Error(`Expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}. ${message}`);
    }
}

function assertApproxEqual(actual, expected, tolerance = 0.01) {
    if (Math.abs(actual - expected) > tolerance) {
        throw new Error(`Expected approximately ${expected}, got ${actual}`);
    }
}

console.log('\n========================================');
console.log('Lab 4: JavaScript Fundamentals - Visible Tests');
console.log('========================================\n');

// Task 2: Operators and Expressions
console.log('--- Task 2: Operators and Expressions ---');

test('calculateCircleArea(5) should return ~78.54', () => {
    assertApproxEqual(calculateCircleArea(5), 78.53975);
});

test('calculateCircleArea(1) should return ~3.14', () => {
    assertApproxEqual(calculateCircleArea(1), 3.14159);
});

test('calculateCircleArea(10) should return ~314.16', () => {
    assertApproxEqual(calculateCircleArea(10), 314.159);
});

test('isEven(4) should return true', () => {
    assertEqual(isEven(4), true);
});

test('isEven(7) should return false', () => {
    assertEqual(isEven(7), false);
});

test('isEven(0) should return true', () => {
    assertEqual(isEven(0), true);
});

test('canVote(18, true) should return true', () => {
    assertEqual(canVote(18, true), true);
});

test('canVote(17, true) should return false', () => {
    assertEqual(canVote(17, true), false);
});

test('canVote(25, false) should return false (not citizen)', () => {
    assertEqual(canVote(25, false), false);
});

// Task 3: Control Flow
console.log('\n--- Task 3: Control Flow ---');

test('getGrade(95) should return "A"', () => {
    assertEqual(getGrade(95), 'A');
});

test('getGrade(85) should return "B"', () => {
    assertEqual(getGrade(85), 'B');
});

test('getGrade(75) should return "C"', () => {
    assertEqual(getGrade(75), 'C');
});

test('getGrade(59) should return "F"', () => {
    assertEqual(getGrade(59), 'F');
});

test('getGrade(89) should return "B" (boundary test)', () => {
    assertEqual(getGrade(89), 'B');
});

test('fizzBuzz(5) should return [1, 2, "Fizz", 4, "Buzz"]', () => {
    assertDeepEqual(fizzBuzz(5), [1, 2, 'Fizz', 4, 'Buzz']);
});

test('fizzBuzz(15) should have "FizzBuzz" at position 14', () => {
    const result = fizzBuzz(15);
    assertEqual(result[14], 'FizzBuzz', 'Position 15 should be FizzBuzz (multiple of 3 and 5)');
});

test('countChar("hello", "l") should return 2', () => {
    assertEqual(countChar('hello', 'l'), 2);
});

test('countChar("mississippi", "s") should return 4', () => {
    assertEqual(countChar('mississippi', 's'), 4);
});

// Task 4: Functions
console.log('\n--- Task 4: Functions ---');

test('factorial(5) should return 120', () => {
    assertEqual(factorial(5), 120);
});

test('factorial(0) should return 1', () => {
    assertEqual(factorial(0), 1);
});

test('factorial(1) should return 1', () => {
    assertEqual(factorial(1), 1);
});

test('factorial(6) should return 720', () => {
    assertEqual(factorial(6), 720);
});

test('makeAdder(5)(3) should return 8', () => {
    assertEqual(makeAdder(5)(3), 8);
});

test('makeAdder(10)(5) should return 15', () => {
    assertEqual(makeAdder(10)(5), 15);
});

test('sum(1, 2, 3) should return 6', () => {
    assertEqual(sum(1, 2, 3), 6);
});

test('sum(5, 10, 15, 20) should return 50', () => {
    assertEqual(sum(5, 10, 15, 20), 50);
});

test('sum() should return 0', () => {
    assertEqual(sum(), 0);
});

// Task 5: Arrays
console.log('\n--- Task 5: Arrays ---');

test('doubleAll([1, 2, 3]) should return [2, 4, 6]', () => {
    assertDeepEqual(doubleAll([1, 2, 3]), [2, 4, 6]);
});

test('doubleAll([5]) should return [10]', () => {
    assertDeepEqual(doubleAll([5]), [10]);
});

test('doubleAll([0, -1, 2]) should return [0, -2, 4]', () => {
    assertDeepEqual(doubleAll([0, -1, 2]), [0, -2, 4]);
});

test('getPositives([-1, 2, -3, 4, 0]) should return [2, 4]', () => {
    assertDeepEqual(getPositives([-1, 2, -3, 4, 0]), [2, 4]);
});

test('getPositives([1, 2, 3]) should return [1, 2, 3]', () => {
    assertDeepEqual(getPositives([1, 2, 3]), [1, 2, 3]);
});

test('arraySum([1, 2, 3, 4, 5]) should return 15', () => {
    assertEqual(arraySum([1, 2, 3, 4, 5]), 15);
});

test('arraySum([10, 20, 30]) should return 60', () => {
    assertEqual(arraySum([10, 20, 30]), 60);
});

test('findMax([3, 1, 4, 1, 5, 9, 2, 6]) should return 9', () => {
    assertEqual(findMax([3, 1, 4, 1, 5, 9, 2, 6]), 9);
});

test('findMax([100, 50, 75]) should return 100', () => {
    assertEqual(findMax([100, 50, 75]), 100);
});

test('removeDuplicates([1, 2, 2, 3, 3, 3]) should return [1, 2, 3]', () => {
    assertDeepEqual(removeDuplicates([1, 2, 2, 3, 3, 3]), [1, 2, 3]);
});

test('removeDuplicates([5, 5, 5]) should return [5]', () => {
    assertDeepEqual(removeDuplicates([5, 5, 5]), [5]);
});

// Summary
console.log('\n========================================');
console.log(`Results: ${passed} passed, ${failed} failed`);
console.log(`Score: ${Math.round((passed / (passed + failed)) * 100)}%`);
console.log('========================================\n');

console.log('Note: This is your visible test score (40% of final grade).');
console.log('Additional hidden tests will run after the deadline.\n');

if (failed > 0) {
    process.exit(1);
}
