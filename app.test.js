const {
  sum,
  stringlength,
  isPrime,
  isPalindrome,
  findString,
  hasProperty,
  multiplyBy,
  alphabetize,
  addition,
  unique,
  subTotal,
  grandTotal
} = require("./app");

describe("sum", () => {
  it("adds two numbers and returns their sum", () => {
    const result = sum(1, 3);
    const expectedResult = 4;
    expect(result).toBe(expectedResult);
  });
});

describe("stringlength", () => {
  it("checks string lenght and returns a number", () => {
    const result = stringlength("helloworld");
    const expectedResult = 10;
    expect(result).toBe(expectedResult);
  });
});

describe("isPrime", () => {
  it("checks number to verify if its prime and returns true if its prime", () => {
    const result = isPrime(11);
    const expectedResult = true;
    expect(result).toBe(expectedResult);
  });

  it("checks number to verify if its prime and returns false if it is not prime", () => {
    const result = isPrime(6);
    const expectedResult = false;
    expect(result).toBe(expectedResult);
  });
});

describe("isPalindrome", () => {
  it("checks to verify that the string reads the same forwards and backwards and returns true if a  palindrome", () => {
    const result = isPalindrome("RACECAR");
    const expectedResult = true;
    expect(result).toBe(expectedResult);
  });

  it("checks to verify that the string reads the same forwards and backwards and returns false if not a  palindrome", () => {
    const result = isPalindrome("hellooooo");
    const expectedResult = false;
    expect(result).toBe(expectedResult);
  });
});

describe("findString", () => {
  it("checks the search string against the array of strings to see if there is a match and returns true if match", () => {
    const result = findString(
      ["green", "200", "orange", "blue jean Billy"],
      "Billy"
    );
    const expectedResult = true;
    expect(result).toBe(expectedResult);
  });

  it("checks the search string against the array of strings and if there is no match it returns false", () => {
    const result = findString(["anybody", "everybody", "somebody"], "hello");
    const expectedResult = false;
    expect(result).toBe(expectedResult);
  });
});

describe("hasProperty", () => {
  it("checks the property name against the object to verify the property name exists and returns true if the object has the specific property name", () => {
    const result = hasProperty(
      { fname: "Holly", lname: "Tree", age: "39" },
      "age"
    );
    const expectedResult = true;
    expect(result).toBe(expectedResult);
  });

  it("checks the property name against the object to verify the property name exists and returns false if the object does not have the specific property name", () => {
    const result = hasProperty(
      { fname: "Holly", lname: "Tree", age: "39" },
      "hello"
    );
    const expectedResult = false;
    expect(result).toBe(expectedResult);
  });
});

describe("multiplyBy", () => {
  it("multiplies all the numbers in the array (first argument) by the number (second argument) and returns the result", () => {
    const result = multiplyBy([1, 2, 3, 4, 5], 5);
    const expectedResult = [5, 10, 15, 20, 25];
    expect(result).toEqual(expectedResult);
  });
});

describe("alphabetize", () => {
  it("sorts an array of strings from a to z and returns the new sorted array", () => {
    const result = alphabetize(["orange", "red", "blue", "pink", "yellow"]);
    const expectedResult = ["blue", "orange", "pink", "red", "yellow"];
    expect(result).toEqual(expectedResult);
  });
});

describe("addition", () => {
  it("takes an array of integers, adds them up and returns the sum", () => {
    const result = addition([5, 5, 5, 5, 5]);
    const expectedResult = 25;
    expect(result).toEqual(expectedResult);
  });
});

describe("unique", () => {
  it("takes an array of strings, checks to see if the value already exists, then returns unique values", () => {
    const result = unique(["1", "1", "hello"]);
    const expectedResult = ["1", "hello"];
    expect(result).toEqual(expectedResult);
  });

  it("takes array of numbers, checks to see if the value already exists, then returns unique values ", () => {
    const result = unique([2, 3, 4, 2]);
    const expectedResult = [2, 3, 4];
    expect(result).toEqual(expectedResult);
  });

  it("takes array of booleans, checks to see if the value already exists, then returns unique values ", () => {
    const result = unique([true, false, false, true, false, false]);
    const expectedResult = [true, false];
    expect(result).toEqual(expectedResult);
  });

  it("takes array of null, checks to see if the value already exists, then returns a unique value", () => {
    const result = unique([null, null, null, null]);
    const expectedResult = [null];
    expect(result).toEqual(expectedResult);
  });

  it("takes array of undefined, checks to see if the values already exists, then returns a unique value", () => {
    const result = unique([undefined, undefined, undefined]);
    const expectedResult = [undefined];
    expect(result).toEqual(expectedResult);
  });

  it("takes array of non-repeated values, checks to see if the values already exist, then returns same non-repeated values", () => {
    const result = unique(["hello", "hi", "how are ya?", 2, 3, 4]);
    const expectedResult = ["hello", "hi", "how are ya?", 2, 3, 4];
    expect(result).toEqual(expectedResult);
  });
});

describe("subTotal", () => {
  it("takes an item's price and mulitplies it by the quantity", () => {
    const result = subTotal([{ price: 500, quantity: 3 }]);
    const expectedResult = 1500;
    expect(result).toEqual(expectedResult);
  });

  it("takes two item's prices and mulitplies it by the quantity of each unit", () => {
    const result = subTotal([
      { price: 500, quantity: 3 },
      { price: 200, quantity: 4 }
    ]);
    const expectedResult = 2300;
    expect(result).toEqual(expectedResult);
  });

  it("takes zero items and returns 0", () => {
    const result = subTotal([]);
    const expectedResult = 0;
    expect(result).toEqual(expectedResult);
  });

  it("takes the sub total and adds tax rate", () => {
    const result = grandTotal(1500, 0.09);
    const expectedResult = 1635;
    expect(result).toEqual(expectedResult);
  });
  it("takes zero items and adds tax rate and returns 0", () => {
    const result = grandTotal(0, 0.09);
    const expectedResult = 0;
    expect(result).toEqual(expectedResult);
  });
});
