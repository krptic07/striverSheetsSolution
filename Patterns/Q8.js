export const upwardStarPattern = (numberOfLines) => {
  const starsInLastLine = 2 * numberOfLines - 1;
  for (let i = numberOfLines; i > 0; i--) {
    let numberOfStars = 2 * i - 1;
    console.log(
      " ".repeat((starsInLastLine - numberOfStars) / 2),
      "*".repeat(numberOfStars),
      " ".repeat((starsInLastLine - numberOfStars) / 2)
    );
  }
};

upwardStarPattern(5);
