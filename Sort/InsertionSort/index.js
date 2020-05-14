function swap(arr, idx, idx2) {
  const temp = arr[idx];
  arr[idx] = arr[idx2];
  arr[idx2] = temp;
}

function insertionSort(array) {
  const length = array.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        swap(array, j, j - 1);
      }
    }
  }
  console.log(array);
  return array;
}
insertionSort([1, 3, 5, 6, 3, 2, 7, 8]);
