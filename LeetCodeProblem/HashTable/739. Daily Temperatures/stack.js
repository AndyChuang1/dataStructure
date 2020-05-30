/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  const len = T.length;
  const stack = [];
  const result = new Array(len).fill(0);

  for (let i = T.length - 1; i >= 0; i--) {
    while (stack.length && T[i] >= T[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (T[i] < T[stack[stack.length - 1]]) {
      const distance = stack[stack.length - 1] - i;
      result[i] = distance;
    }

    stack.push(i);
  }
  return result;
};
