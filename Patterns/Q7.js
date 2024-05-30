export const downwardStarPattern = (numberOfLines) => {
  const starsInLastLine = 2 * numberOfLines - 1;
  for (let i = 1; i <= numberOfLines; i++) {
    const numberOfStars = 2 * i - 1;
    console.log(
      " ".repeat((starsInLastLine - numberOfStars) / 2),
      "*".repeat(numberOfStars),
      " ".repeat((starsInLastLine - numberOfStars) / 2)
    );
  }
};

downwardStarPattern(5);
