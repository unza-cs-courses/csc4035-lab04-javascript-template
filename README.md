# Lab 4: JavaScript Fundamentals

**Course:** CSC4035 Web Programming and Technologies
**Estimated Time:** 2 hours
**Weight:** 1% of final grade

---

## Purpose

This lab introduces core JavaScript concepts including variables, operators, control flow, functions, and array methods. These fundamentals are essential for all client-side and server-side web development.

---

## Learning Outcomes

By completing this lab, you will be able to:

1. Declare and use variables with appropriate data types
2. Use operators and expressions for calculations and comparisons
3. Implement control flow using if/else, loops, and switch statements
4. Create functions including recursive functions and closures
5. Manipulate arrays using map, filter, and reduce methods

---

## Setup

1. Clone this repository
2. Run `npm install` (no dependencies, but good practice)
3. Complete the functions in `exercises.js`
4. Run tests with `npm test`

---

## Tasks

### Task 1: Variables and Data Types

Declare the following in `exercises.js`:

1. A constant `PI` with value `3.14159`
2. Variables for `name`, `age`, and `isStudent`
3. A `book` object with `title`, `author`, `year`, `pages`
4. An array of 5 programming languages

### Task 2: Operators and Expressions

Implement these functions:

- `calculateCircleArea(radius)` - Returns PI * radius²
- `isEven(num)` - Returns true if number is even
- `canVote(age, isCitizen)` - Returns true if 18+ and citizen

### Task 3: Control Flow

Implement these functions:

- `getGrade(score)` - Returns letter grade (A/B/C/D/F)
- `fizzBuzz(n)` - Classic FizzBuzz algorithm
- `countChar(str, char)` - Count character occurrences

### Task 4: Functions

Implement these functions:

- `factorial(n)` - Calculate n! using recursion
- `makeAdder(x)` - Return a closure that adds x
- `sum(...numbers)` - Sum any number of arguments

### Task 5: Arrays

Implement these functions using array methods:

- `doubleAll(arr)` - Double all numbers (use `map`)
- `getPositives(arr)` - Filter positive numbers (use `filter`)
- `arraySum(arr)` - Sum all numbers (use `reduce`)
- `findMax(arr)` - Find maximum value
- `removeDuplicates(arr)` - Remove duplicate values

---

## Running Tests

```bash
npm test
```

You should see output showing which tests pass (✓) and fail (✗).

---

## Grading

| Component | Weight |
|-----------|--------|
| Visible Tests | 40% |
| Hidden Tests | 30% |
| Code Quality | 20% |
| Academic Integrity | -10% if flagged |

### Visible Tests (This Lab)

The tests in `tests/visible/tests.js` run on every push. These cover basic cases for each function.

### Hidden Tests

Additional tests run after the deadline covering:
- Edge cases (empty arrays, zero values, negative numbers)
- Performance (large inputs)
- Code style and best practices

---

## Submission

1. Complete all functions in `exercises.js`
2. Ensure `npm test` passes
3. Commit and push your changes
4. Verify all tests pass locally before pushing

```bash
git add .
git commit -m "Complete Lab 4"
git push
```

---

## Tips

- Use `const` for values that don't change
- Use `let` for values that will be reassigned
- Never use `var` in modern JavaScript
- Use arrow functions where appropriate
- Array methods (`map`, `filter`, `reduce`) are preferred over loops

---

## Resources

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [JavaScript Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

---

## Academic Integrity

- **Allowed:** Course materials, MDN, W3Schools
- **Allowed:** Discussing concepts with classmates
- **NOT Allowed:** Copying code from others
- **NOT Allowed:** Using AI to generate solutions

All submissions are checked with plagiarism detection tools.
