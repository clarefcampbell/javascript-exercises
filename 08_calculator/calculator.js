const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
  return numArray.reduce((sum, num) => sum + num, 0);
};

const multiply = function(numArray) {
  return numArray.reduce((product, num) => product *= num, 1);
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
