const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
	let sum = 0;
  for (num of numArray) {
    sum += num;
  }
  return sum;
};

const multiply = function(numArray) {
  let product = 1;
  for (num of numArray) {
    product *= num;
  }
  return product;
};

const power = function(base, exponent) {
	return base**exponent;
};

const factorial = function(num) {
	let factorial = 1;
  for (let i = num ; i > 0 ; i--) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
