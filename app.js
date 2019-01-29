function sum(a, b) {
  return a + b;
}

function stringlength(string) {
  return string.length;
}

function isPrime(number) {
  for (var i = 2; i <= number / 2; i++) {
    console.log(i);
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

function isPalindrome(string) {
  const reversedString = string
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
  if (string.toLowerCase() === reversedString) {
    return true;
  }
  return false;
}

function findString(stringArray, string) {
  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i].match(string)) return true;
  }
  return false;
}

function hasProperty(object, string) {
  if (object.hasOwnProperty(string)) {
    return true;
  }
  return false;
}

function multiplyBy(numsArray, num) {
  const newNum = numsArray.map(function(e) {
    return e * num;
  });
  return newNum;
}

function alphabetize(strings) {
  return strings.sort();
}

function addition(intArray) {
  let sum = 0;
  for (let i = 0; i < intArray.length; i++) {
    sum += intArray[i];
  }

  return sum;
}

module.exports = {
  sum: sum,
  stringlength: stringlength,
  isPrime: isPrime,
  isPalindrome: isPalindrome,
  findString: findString,
  hasProperty: hasProperty,
  multiplyBy: multiplyBy,
  alphabetize: alphabetize,
  addition: addition
};
