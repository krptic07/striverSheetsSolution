//if d is a divisor of n , then n/d is also a divisor of n
//the divisors are symmetric about the square root of n
//so the iteration needs to be done upto root(n) only

const divisorsOfNumber = (number) => {
  const flooredSquareRoot = Math.floor(Math.sqrt(number));
  console.log(flooredSquareRoot);
  let divisors = [];
  for (let i = 1; i <= flooredSquareRoot; i++) {
    if (number % i === 0) {
      if (i === flooredSquareRoot && i * i === number) {
        divisors.push(i);
        continue;
      }
      divisors.push(i);
      divisors.push(number / i);
    }
  }
  return divisors.join(" ");
};

console.log(divisorsOfNumber(12));
