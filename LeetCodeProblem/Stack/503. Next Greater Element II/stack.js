/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const result = new Array(nums.length).fill(-1);
  const stack = [];
  const len = nums.length;

  for (let i = 0; i < len * 2 - 1; i++) {
    //因為要模擬循環 所以可用i % len找到原本arr所在的idx 方便找到result
    // [1,2,1] i=3 3%2  就會是第一個idx 藉此拿到1 這個值
    const mapIdx = i % len;
    //nums[stack[stack.length - 1]]為前一個數值 如果比nums[i % len] 當前數值小代表 此index 的答案就是nums[i % len]
    while (stack.length && nums[stack[stack.length - 1]] < nums[mapIdx]) {
      result[stack[stack.length - 1]] = nums[mapIdx];
      stack.pop();
    }
    stack.push(i % len);
  }

  return result;
};

nextGreaterElements([1, 2, 1]);
