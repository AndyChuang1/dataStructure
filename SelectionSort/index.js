function swap(arr, idx, idx2) {
  let temp = arr[idx];
  arr[idx] = arr[idx2];
  arr[idx2] = temp;
}
function selectionSort(array) {
  let length = array.length;
  let indexMin;
  for (let i = 0; i < length; i++) {
    indexMin = i;
    for (let j = i; j < length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
    }
    swap(array, i, indexMin);
  }
  return array;
}

const sort = selectionSort([5, 6, 9, 1, 10, 3]);
console.log(sort);
