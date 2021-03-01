function sum(a, b) {
  return a + b;
}

function stringlength(string) {
  return string.length;
}

function isPrime(number) {
  for (var i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
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
  const sum = intArray.reduce((total, num) => {
    return total + num;
  }, 0);
  return sum;
}

function unique(array) {
  const newArray = array.reduce((uniqueArray, e) => {
    if (!uniqueArray.includes(e)) {
      uniqueArray.push(e);
    }
    return uniqueArray;
  }, []);
  return newArray;
}

function subTotal(products) {
  const subTotal = products.reduce((total, product) => {
    const lineItemTotal = product.price * product.quantity;
    return lineItemTotal + total;
  }, 0);
  return subTotal;
}

function grandTotal(subTotal, taxRate) {
  const taxes = subTotal * taxRate;
  const grandTotal = subTotal + taxes;
  return grandTotal;
}

function fizzBuzz() {
  const newArray = [];
  for (var i = 1; i < 16; i++) {
    if (i % 15 === 0) {
      newArray.push("fizzBuzz");
    } else if (i % 3 === 0) {
      newArray.push("Fizz");
    } else if (i % 5 === 0) {
      newArray.push("Buzz");
    } else {
      newArray.push(i);
    }
  }
  return newArray;
}
function formatString(format_str, str_replacements) {
  const regex = /\{\d+\}/g;
  return format_str.replace(regex, function(placeholder) {
    const newRegex = /\d+/;
    const index = placeholder.match(newRegex);
    return str_replacements[index];
  });
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
  addition: addition,
  unique: unique,
  subTotal: subTotal,
  grandTotal: grandTotal,
  fizzBuzz: fizzBuzz,
  formatString: formatString
};
