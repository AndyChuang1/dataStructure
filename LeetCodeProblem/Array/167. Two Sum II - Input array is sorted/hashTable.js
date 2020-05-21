/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const map = new Map();
  const len = numbers.length;

  for (let i = 0; i < len; i++) {
    map.set(numbers[i], i);
  }

  for (let i = 0; i < len; i++) {
    const restNum = target - numbers[i];
    if (map.has(restNum)) {
      return [i + 1, map.get(restNum) + 1];
    }
  }
  // return -1;
};
