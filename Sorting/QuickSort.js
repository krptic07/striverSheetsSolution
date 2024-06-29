//Now, let’s understand how we are going to implement the logic of the above steps. In the intuition, we have seen that the given array should be broken down into subarrays. But while implementing, we are not going to break down and create any new arrays. Instead, we will specify the range of the subarrays using two indices or pointers(i.e. low pointer and high pointer) each time while breaking down the array.

//The algorithm steps are the following for the quickSort() function:

//Initially, the low points to the first index and the high points to the last index(as the range is n i.e. the size of the array).
//After that, we will get the index(where the pivot should be placed after sorting) while shifting the smaller elements on the left and the larger ones on the right using a partition() function discussed later.
//Now, this index can be called the partition index as it creates a partition between the left and the right unsorted subarrays.
//After placing the pivot in the partition index(within the partition() function specified), we need to call the function quickSort() for the left and the right subarray recursively. So, the range of the left subarray will be [low to (partition index - 1)] and the range of the right subarray will be [(partition index + 1) to high].
//This is how the recursion will continue until the range becomes 1.

const quickSort = (arr, low, high) => {
  if (low >= high) {
    return;
  } else {
    const partitionIndex = partition(arr, low, high);
    quickSort(arr, low, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, high);
  }
};

const partition = (arr, low, high) => {
  let i = low;
  let j = high;
  const partitionElement = arr[low];
  while (i < j) {
    while (arr[i] <= partitionElement && i <= high - 1) {
      i++;
    }
    while (arr[j] > partitionElement && j >= low - 1) {
      j--;
    }
    if (i < j) {
      const swap = arr[i];
      arr[i] = arr[j];
      arr[j] = swap;
    }
  }
  const swap = arr[low];
  arr[low] = arr[j];
  arr[j] = swap;
  return j;
};

const testArray = [4, 2, 0, 1, 5, 9, 3];
quickSort(testArray, 0, testArray.length - 1);
console.log(testArray);
