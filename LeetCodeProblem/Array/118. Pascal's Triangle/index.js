/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = [];
  for (let i = 0; i < numRows; i++) {
    const arr = [];
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        arr.push(1);
      } else {
        //找到前一個result 兩兩相家
        arr.push(result[i - 1][j - 1] + result[i - 1][j]);
      }
    }
    result.push(arr);
  }
  return result;
};

generate(5);
