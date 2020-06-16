/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let minLen = Number.MAX_SAFE_INTEGER;
  let L = 0,
    R = 0;
  let sum = 0;
  while (R < nums.length) {
    sum += nums[R];

    while (sum >= s) {
      minLen = Math.min(minLen, R - L + 1);
      sum -= nums[L];
      L++;
    }
    R++;
  }
  return minLen;
};

// minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
minSubArrayLen(4, [1, 4, 4]);
