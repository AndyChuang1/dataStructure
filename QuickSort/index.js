function QucikSort(arr) {
  const len = arr.length - 1;
  const pivot = arr[Math.floor(arr.length / 2)];
  const l = [];
  const r = [];
  if (arr.length <= 1) {
    return arr;
  }
  for (let i = 0; i < len; i++) {
    if (arr[i] < pivot) {
      l.push(arr[i]);
    }
    if (arr[i] > pivot) {
      r.push(arr[i]);
    }
  }

  return [...QucikSort(l), pivot, ...QucikSort(r)];
}

console.log(QucikSort([2, 5, 6, 1, 32, 43, 26, 44]));
