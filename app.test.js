const {
  sum,
  stringlength,
  isPrime,
  isPalindrome,
  findString,
  hasProperty
} = require("./app");

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

// 3. isPalindrome: takes one argument, a string, returns `true` if the string is a palindrome and
// `false` if it is not.

describe("isPalindrome", () => {
  it("checks to verify that the string reads the same forwards and backwards and returns true if a  palindrome", () => {
    const result = isPalindrome("RACECAR");
    const expectedResult = true;
    expect(result).toBe(expectedResult);
  });
});

describe("isPalindrome", () => {
  it("checks to verify that the string reads the same forwards and backwards and returns false if not a  palindrome", () => {
    const result = isPalindrome("hellooooo");
    const expectedResult = false;
    expect(result).toBe(expectedResult);
  });
});

// findString: takes two arguments, an array of strings and a search string,
// returns `true` if the search string is found in the array and `false` if it isn't.

describe("findString", () => {
  it("checks the search string against the array of strings to see if there is a match and returns true if match", () => {
    const result = findString(
      ["green", "200", "orange", "blue jean Billy"],
      "Billy"
    );
    const expectedResult = true;
    expect(result).toBe(expectedResult);
  });
});
describe("findString", () => {
  it("checks the search string against the array of strings and if there is no match it returns false", () => {
    const result = findString(["anybody", "everybody", "somebody"], "hello");
    const expectedResult = false;
    expect(result).toBe(expectedResult);
  });
});
// hasProperty: takes two arguments, an object and a property name, returns `true` if the object has a property with the given name and `false` if it doesn't.

describe("hasProperty", () => {
  it("checks the property name against the object to verify the property name exists and returns true if the object has the specific property name", () => {
    const result = hasProperty(
      { fname: "Holly", lname: "Tree", age: "39" },
      "age"
    );
    const expectedResult = true;
    expect(result).toBe(expectedResult);
  });
});

describe("hasProperty", () => {
  it("checks the property name against the object to verify the property name exists and returns false if the object does not have the specific property name", () => {
    const result = hasProperty(
      { fname: "Holly", lname: "Tree", age: "39" },
      "hello"
    );
    const expectedResult = false;
    expect(result).toBe(expectedResult);
  });
});
