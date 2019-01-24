const { sum } = require("./app");

describe("sum", () => {
  it("adds two numbers and returns their sum", () => {
    const result = sum(1, 3);
    const expectedResult = 4;
    expect(result).toBe(expectedResult);
  });
});
