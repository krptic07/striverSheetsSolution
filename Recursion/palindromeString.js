const palindromeString = (string, lowestIndex, highestIndex) => {
  if (lowestIndex > highestIndex) {
    return true;
  } else {
    if (string[lowestIndex] === string[highestIndex]) {
      lowestIndex += 1;
      highestIndex -= 1;
      return palindromeString(string, lowestIndex, highestIndex);
    } else {
      return false;
    }
  }
};

const createAlphaNumericString = (string) => {
  let newString = "";
  for (let i = 0; i <= string.length - 1; i++) {
    if (
      (string.charCodeAt(i) > 47 && string.charCodeAt(i) < 58) || //numeric
      (string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123) //lowerAlpha
    ) {
      newString += string[i];
    }
    if (string.charCodeAt(i) > 64 && string.charCodeAt(i) < 91) {
      //upperAlpha
      newString += string[i].toLowerCase();
    }
  }
  return newString;
};

const testString = "A man, a plan, a canal: Panama";
console.log(createAlphaNumericString(testString));

console.log(
  palindromeString(
    createAlphaNumericString(testString),
    0,
    createAlphaNumericString(testString).length - 1
  )
);
