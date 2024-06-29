//Given an array of integers: [1, 2, 1, 3, 2] and we are given some queries: [1, 3, 4, 2, 10]. For each query, we need to find out how many times the number appears in the array.
//For example, if the query is 1 our answer would be 2, and if the query is 4 the answer will be 0

//number Hashing
const findNumberOccurence = (givenQuery, mainArray) => {
  const hashArray = new Array(13).fill(0); //here, we are assuming the maximum element in the given array can be 12, so if we create an array of size 13, we get 12 as the last index.
  mainArray.map((element) => {
    hashArray[element] += 1;
  });
  return `Number of occurence of given query is ${hashArray[givenQuery]}`;
};

console.log(findNumberOccurence(1, [1, 2, 1, 3, 2]));

//character Hashing
//if the string contains only lowercase letters

const findStringOccurence = (givenQuery, mainString) => {
  const hashArray = new Array(26).fill(0);
  for (const string of mainString) {
    hashArray[string.charCodeAt(0) - "a".charCodeAt(0)] += 1;
  }
  console.table(hashArray);

  return `Number of occurence of letter in word is ${
    hashArray[givenQuery.charCodeAt(0) - "a".charCodeAt(0)]
  }`;
};

console.log(findStringOccurence("h", "asdfghkjfhgajghdsfjhgjfdashjgh"));

//to convert the array into a map

const creatingHashMap = (givenQuery, mainArray) => {
  const hashMap = {};
  mainArray.map((element) => {
    if (!hashMap[element]) {
      hashMap[element] = 0;
    }
    hashMap[element] += 1;
  });
  const numberOfOcurrence = `Number of occurence of ${givenQuery} is ${
    hashMap[givenQuery] ? hashMap[givenQuery] : 0
  }`;
  let minKey = Object.keys(hashMap)[0];
  let maxKey = Object.keys(hashMap)[0];
  let minValue = hashMap[minKey];
  let maxValue = hashMap[maxKey];
  for (let key in hashMap) {
    if (hashMap[key] > maxValue) {
      maxValue = hashMap[key];
      maxKey = key;
    }
    if (hashMap[key] < minValue) {
      minValue = hashMap[key];
      minKey = key;
    }
  }
  return `Number of occurence: ${numberOfOcurrence} and maxOccurence: ${maxKey} minOccurence: ${minKey}`;
};

console.log(creatingHashMap(100, [1, 2, 4, 5, 4, 4, 9, 100, 4, 12]));
