const { sum, stringlength } = require("./app");

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
