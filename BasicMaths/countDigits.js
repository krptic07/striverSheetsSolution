const countDigits = (inputNumber) => {
  const totalCount = Math.log10(inputNumber) + 1;
  return Math.floor(totalCount);
};

console.log(countDigits(7789));
