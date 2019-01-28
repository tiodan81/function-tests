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

module.exports = {
  sum: sum,
  stringlength: stringlength,
  isPrime: isPrime,
  isPalindrome: isPalindrome
};
