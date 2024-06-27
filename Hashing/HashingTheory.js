//Given an array of integers: [1, 2, 1, 3, 2] and we are given some queries: [1, 3, 4, 2, 10]. For each query, we need to find out how many times the number appears in the array.
//For example, if the query is 1 our answer would be 2, and if the query is 4 the answer will be 0

const findNumberOfOccurence = (givenQuery, mainArray) => {
  const hashArray = new Array(13).fill(0); //here, we are assuming the maximum element in the given array can be 12, so if we create an array of size 13, we get 12 as the last index.
  mainArray.map((element) => {
    hashArray[element] += 1;
  });
  return `Number of occurence of given query is ${hashArray[givenQuery]}`;
};

console.log(findNumberOfOccurence(1, [1, 2, 1, 3, 2]));
