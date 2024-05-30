const gcdOfTwoNumbers = (number1, number2) => {
  if (Math.min(number1, number2) === 0) {
    return Math.max(number1, number2);
  } else {
    return gcdOfTwoNumbers(
      Math.max(number1, number2) - Math.min(number1, number2),
      Math.min(number1, number2)
    );
  }
};

//eucledian formula =  gcd(n1,n2) = gcd(n1-n2,n2) n2<n1
//do this until one becomes zero and the second number is the gcd

console.log(gcdOfTwoNumbers(20, 15));
