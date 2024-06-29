const recursiveBubbleSort = (arr, high) => {
  if (high <= 0) {
    return;
  } else {
    for (let i = 0; i <= high; i++) {
      if (arr[i] > arr[i + 1]) {
        const swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap;
      }
    }
    recursiveBubbleSort(arr, high - 1);
  }
};

const testArray = [4, 2, 0, 1, 5, 9, 3];
recursiveBubbleSort(testArray, testArray.length - 1);
console.log(testArray);
