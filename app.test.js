const { sum, stringlength, isPrime } = require("./app");

describe("sum", () => {
  it("adds two numbers and returns their sum", () => {
    const result = sum(1, 3);
    const expectedResult = 4;
    expect(result).toBe(expectedResult);
  });
});

// stringLength: takes one argument, a string, returns a number representing the length of the string.

describe("stringlength", () => {
  it("checks string lenght and returns a number", () => {
    const result = stringlength("helloworld");
    const expectedResult = 10;
    expect(result).toBe(expectedResult);
  });
});

// isPrime: takes one argument, a number, returns `true` if the number is a prime number and `false` if it isn't.

describe("isPrime", () => {
  it("checks number to verify if its prime and returns true if its prime", () => {
    const result = isPrime(11);
    const expectedResult = true;
    expect(result).toBe(expectedResult);
  });
});

describe("isPrime", () => {
  it("checks number to verify if its prime and returns false if it is not prime", () => {
    const result = isPrime(6);
    const expectedResult = false;
    expect(result).toBe(expectedResult);
  });
});
