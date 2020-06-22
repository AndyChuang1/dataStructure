var sortedSquares = function (A) {
  let l = 0;
  let r = A.length - 1;
  let maxIndex = A.length - 1;
  let result = [];
  while (l <= r) {
    const squL = Math.pow(A[l], 2);
    const squR = Math.pow(A[r], 2);
    if (squL <= squR) {
      result[maxIndex] = squR;
      maxIndex--;
      r--;
    }
    if (squL > squR) {
      result[maxIndex] = squL;
      maxIndex--;
      l++;
    }
  }
  return result;
};
sortedSquares([-4, -1, 0, 3, 10]);
