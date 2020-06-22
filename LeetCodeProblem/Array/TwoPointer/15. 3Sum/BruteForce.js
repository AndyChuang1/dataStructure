/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  const result = {};
  const len = nums.length;
  //lgN
  nums.sort((a, b) => a - b);
  //n^3
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        if (nums[i] + nums[j] === -nums[k]) {
          let key = '' + nums[i] + nums[j] + nums[k];
          if (!result[key]) {
            result[key] = [nums[i], nums[j], nums[k]];
          }
        }
      }
    }
  }
  return Object.values(result);
}

threeSum([-1, 0, 1, 2, -1, -4]);
