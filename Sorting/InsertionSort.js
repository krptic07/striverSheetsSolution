//Select an element in each iteration from the unsorted array(using a loop).
//Place it in its corresponding position in the sorted part and shift the remaining elements accordingly (using an inner loop and swapping).
//The “inner while loop” basically shifts the elements using swapping.

const insertionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        const swap = array[j];
        array[j] = array[j - 1];
        array[j - 1] = swap;
      }
    }
  }
  return array;
};

console.log(insertionSort([4, 2, 0, 1, 5, 9, 3]));
