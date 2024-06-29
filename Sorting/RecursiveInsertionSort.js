const recursiveInsertionSort = (arr, low) => {
  if (low >= arr.length - 1) {
    return;
  } else {
    for (let i = arr.length - 1; i > low; i--) {
      if (arr[i] < arr[i - 1]) {
        const swap = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = swap;
      }
    }
    recursiveInsertionSort(arr, low + 1);
  }
};

const testArray = [4, 2, 0, 1, 5, 9, 3];
recursiveInsertionSort(testArray, 0);
console.log(testArray);
