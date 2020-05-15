function QucikSort(arr) {
  const swap = (arr, L, R) => {
    const temp = arr[L];
    arr[L] = arr[R];
    arr[R] = temp;
  };

  const _quickSort = (arr, L, R) => {
    if (L >= R) {
      return;
    }
    //把排好的陣列切開，繼續重複比對大小
    const middleIndex = partition(arr, L, R);
    _quickSort(arr, L, middleIndex - 1);
    _quickSort(arr, middleIndex + 1, R);
    return arr;
  };

  // const partition = (arr, L, R) => {
  //   //找中間值當pivot
  //   const pivot = Math.floor(arr.length / 2);
  //   while (L <= R) {
  //     while (arr[L] < arr[pivot]) {
  //       L++;
  //     }
  //     while (arr[R] > arr[pivot]) {
  //       R--;
  //     }
  //     if (L <= R) {
  //       swap(arr, L, R);
  //     }
  //     return L;
  //   }
  // };

  //需要了解 partition
  const partition = (array, L, R) => {
    let pivot = L + 1;
    for (let i = L + 1; i <= R; i++) {
      if (array[i] < array[L]) {
        swap(array, i, pivot);
        pivot++;
      }
    }

    // 記得把 pivot 跟最後一個比它小的元素互換
    swap(array, L, pivot - 1);
    return pivot - 1;
  };

  return _quickSort(arr, 0, arr.length - 1);
}

console.log(QucikSort([10, 6, 1, 5, 3, 4]));
