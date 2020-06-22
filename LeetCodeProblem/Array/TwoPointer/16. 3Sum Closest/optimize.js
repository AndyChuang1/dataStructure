/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let closet = null;
  //O(logn)
  nums.sort((a, b) => a - b);
  //Time O(n)
  for (let i = 0; i < nums.length; i++) {
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      //當下的距離
      const curDistance = Math.abs(sum - target);
      // 目前最小的距離
      const curCloset = Math.abs(closet - target);
      // 如果當下距離<目前最小距離 需要更新 或者 沒有closet 把目前sum當作closet
      if (curDistance < curCloset || closet == null) {
        closet = sum;
      }

      if (sum === target) {
        return sum;
      }
      if (sum < target) {
        l++;
      }
      if (sum > target) {
        r--;
      }
    }
  }

  return closet;
};

threeSumClosest([0, 2, 1, -3], 1);

// Time complexity = O(nLogn)
//spcae complexity = O(1)
