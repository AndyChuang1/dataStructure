/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  if (nums.length == 1) {
    return nums[0] === 0 ? 1 : nums[0] - 1;
  }
  if (nums.length <= 0) {
    return nums;
  }
  const sortArray = nums.sort((a, b) => {
    return a - b;
  });
  const len = sortArray.length;

  for (let i = 0; i <= len; i++) {
    if (sortArray[i] !== i) {
      return i;
    }
  }
};
