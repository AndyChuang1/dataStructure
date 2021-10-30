/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  let result = -1;
  const n = nums.length;

  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < n; ++j) {
      const diff = nums[j] - nums[i];
      if (diff > 0) {
        result = Math.max(diff, result);
      }
    }
  }

  return result;
};

var maximumDifference2 = function (nums) {
  let min = Infinity;
  let diff = -1;

  for (let i = 0; i < nums.length; ++i) {
    min = Math.min(min, nums[i]);
    diff = Math.max(diff, nums[i] - min);
  }

  return diff == 0 ? -1 : diff;
};
