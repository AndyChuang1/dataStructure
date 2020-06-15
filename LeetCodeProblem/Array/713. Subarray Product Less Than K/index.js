/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  const len = nums.length;
  let count = 0;
  let product = 1;

  for (let i = 0; i < len; i++) {
    //預設為1
    product = 1;
    for (let j = i; j < len; j++) {
      //算出乘積
      product = product * nums[j];
      //如果大於K,代表不用繼續算乘積，因為都會大於
      if (product < k) {
        count++;
      } else {
        break;
      }
    }
  }

  return count;
};

//

numSubarrayProductLessThanK([10, 5, 2, 6]);
