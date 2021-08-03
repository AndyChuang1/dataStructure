var rob = function (nums) {
  let len = nums.length;
  let table = [];

  table[0] = nums[0];
  table[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < len; i++) {
    table[i] = Math.max(nums[i] + table[i - 2], table[i - 1]);
  }

  return table[len - 1];
};

console.log(rob([3, 2, 3, 7]));
