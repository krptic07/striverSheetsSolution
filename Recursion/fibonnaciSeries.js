const fibonnaciSeries = (lastNumber) => {
  if (lastNumber <= 1) {
    return lastNumber;
  } else {
    return fibonnaciSeries(lastNumber - 1) + fibonnaciSeries(lastNumber - 2);
  }
};

console.log(fibonnaciSeries(4));

//The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
// such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).
