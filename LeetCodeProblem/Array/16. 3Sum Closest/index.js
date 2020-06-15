/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let result = []; //space n
  //Time O(n)
  for (let i = 0; i < nums.length; i++) {
    let l = i + 1;
    let r = nums.length - 1;
    nums.sort((a, b) => a - b);
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === target) {
        return sum;
      }
      if (sum < target) {
        l++;
      }
      if (sum > target) {
        r--;
      }
      result.push(sum);
    }
  }

  //找出離TARGET最近的sum
  return findCloset(result, target);
};

function findCloset(arr, target) {
  //算出sum與taget的距離
  //Time O(n)
  const distance = arr.map(sum => {
    return Math.abs(sum - target);
  });
  const minDistance = Math.min(...distance);
  //因為需要return sum 所以拿到minDistance  mapping 到sum陣列當中
  // Time O(n)
  return arr[distance.indexOf(minDistance)];
}
