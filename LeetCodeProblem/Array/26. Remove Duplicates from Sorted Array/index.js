var removeDuplicates = function (nums) {
  if (nums.length <= 1) {
    return nums.length;
  }
  let length = nums.length;
  let k = 1;
  for (let i = 1; i < length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
      // nums.splice(i, 1);
    }
  }
  return k;
};

console.log(removeDuplicates([1, 1, 2]));
