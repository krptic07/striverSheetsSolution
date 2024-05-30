const factorialOfNumber = (number) => {
  if (number === 1) {
    return 1;
  } else {
    return number * factorialOfNumber(number - 1);
  }
};
console.log(factorialOfNumber(132));
