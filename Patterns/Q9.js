import { upwardStarPattern } from "./Q8.js";
import { downwardStarPattern } from "./Q7.js";

const mixedStarPattern = (numberOfLines) => {
  downwardStarPattern(numberOfLines / 2);
  upwardStarPattern(numberOfLines / 2);
};

mixedStarPattern(10);
