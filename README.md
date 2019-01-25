# Function Tests

This exercise is all about the problem solving process. We will write a series of functions and test them using Jest, which will allow us to write expectations that describe how the function should work, then verify that it works properly.

The functions will be written in the `app.js` file and the tests in `app.test.js`. Each of these files has an example already. You can run the tests from the terminal using the `npm test` command.

## Setup

1. clone this repository to your machine and `cd` into the repo.
2. install jest with `npm install`.
3. verify that the example works by running `npm test`.

## Workflow

For each function listed below, start by adding a `describe` block to the test file with the name of the function. For example, the `describe` for the `sum` function looks like:

```
describe("sum", () => {
  // tests go here
});
```

The describe block is just a container for the tests related to that function.

Next, add some `it` blocks inside the `describe` to explain the expected behavior of the function. For example, for the `sum` function:

```
it("adds two numbers and returns their sum", () => {
  // test goes here
});
```

Try to think of all the possible outcomes that calling a function might have and add one `it` block for each case. For example, a function that returns `true` or `false` would need two cases, one for each possible return value. These descriptions should use plain language to explain what the function will do when called with different arguments. "It returns true when called with ...", "It returns false when called with...".

Next, write an `expect` statement for each `it` block. These statements are the actual tests, because they call the function that is being tested and make an assertion about the return value. They always take the form `expect(result).toBe(expectedResult);`, where `toBe` is one of the built-in matchers from Jest, `result` is the value returned by the function, and `expectedResult` is the value you expect for `result`. See [here](https://jestjs.io/docs/en/using-matchers) for an introduction to Jest matchers, and [here](https://jestjs.io/docs/en/expect) for the full list of matchers. The functions in this assignment should be testable with the `toBe` and `toEqual` matchers.

Once you have written an `expect` statement, save the test file and run the tests in your terminal. The new test should fail because the function being tested hasn't been written yet. This might sound silly, but it's important to prove that your test can actually fail.

In `app.js`, sketch out a function declaration with a function name, the appropriate parameters, and an empty function body. Then fill in the function body with the necessary code.

When your function is ready to test, add it to the `module.exports` object in `app.js`. This will make the function accessible in the test file. Next, import it to the test file by adding the function name to the `require` statement at the top of the file. Run your test and begin debugging as needed. You can avoid having to manually run the tests over and over with the `npm test -- --watch` command. This will automatically run the tests every time you save a change to the function or the test file. When all the tests for the function pass, commit your work and move on to the next function.

## Functions

1. stringLength: takes one argument, a string, returns a number representing the length of the string.
2. isPrime: takes one argument, a number, returns `true` if the number is a prime number and `false` if it isn't.
3. isPalindrome: takes one argument, a string, returns `true` if the string is a palindrome and `false` if it isn't.
4. findString: takes two arguments, an array of strings and a search string, returns `true` if the search string is found in the array and `false` if it isn't.
5. hasProperty: takes two arguments, an object and a property name, returns `true` if the object has a property with the given name and `false` if it doesn't.
6. multiplyBy: takes two arguments, an array of numbers and a number, multiplies all the numbers in the array by the number, and returns the result.
7. alphabetize: takes one argument, an array of strings, and returns an array with the string sorted alphabetically from a to z.
8. sum: takes one argument, an array of integers, and returns their sum. Don't worry about decimal numbers.
9. unique: takes one argument, an array of primitive values (strings, numbers, booleans, null, or undefined. NOT arrays or objects), and returns an array with any duplicate values removed.
10. cartTotal: takes two arguments, an array of objects that have a `price` and `count` and a sales tax rate, and returns the total price of the items including sales tax. Make sure to factor in the `count` of each item.
