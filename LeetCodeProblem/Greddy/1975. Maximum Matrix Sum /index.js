/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function (matrix) {
  let count = 0;
  let n = matrix.length;
  let minNum = Infinity;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const curVal = matrix[i][j];
      minNum = Math.min(Math.abs(curVal), minNum);
      if (curVal < 0) count++;
      sum += Math.abs(curVal);
    }
  }
  //   this is because we included it once in the absolute sum,
  //   so first we need to undo the addition of the absolute value
  //   then we need to add the negative
  return count % 2 == 0 ? sum : sum - 2 * minNum;
};
maxMatrixSum([
  [1, 2, 3],
  [-1, -2, -3],
  [1, 2, 3],
]);
