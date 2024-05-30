const reverseNumber = (inputNumber, resultArray) => {
  if (~~(inputNumber / 10) === 0) {
    resultArray.push(inputNumber % 10);
    return resultArray.join("");
  } else {
    const lastDigit = inputNumber % 10;
    if (lastDigit === 0 && resultArray.length === 0) {
      return reverseNumber(~~(inputNumber / 10), resultArray);
    } else {
      resultArray.push(lastDigit);
      return reverseNumber(~~(inputNumber / 10), resultArray);
    }
  }
};

console.log(reverseNumber(134000, []));
