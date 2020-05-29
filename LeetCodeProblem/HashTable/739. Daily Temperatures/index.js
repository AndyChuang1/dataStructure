/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  const len = T.length;
  const result = [];

  for (let i = 0; i < len; i++) {
    let waitDay = 0;
    let compareIdx = i + 1;
    //需要>= 不然下一天跟當天一樣就不會count
    while (T[i] >= T[compareIdx]) {
      waitDay += 1;
      compareIdx += 1;
    }
    // 如果都找不到 就push 0
    T[compareIdx] ? result.push(waitDay + 1) : result.push(0);
  }
  return result;
};
dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
