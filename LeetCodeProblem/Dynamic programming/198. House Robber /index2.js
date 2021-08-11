var pivotIndex = function (nums) {
  let lSumArr = [];
  let rSumArr = [];
  const len = nums.length;
  let pivot = -1;
  let pointer = 0;

  for (let i = 0; i < len; i++) {
    if (i == 0) {
      lSumArr[i] = 0;
      continue;
    }

    let sum = 0;
    for (let j = 0; j < i; j++) {
      sum = sum + nums[j];
    }
    lSumArr[i] = sum;
  }

  for (let i = 0; i < len; i++) {
    if (i + 1 == nums.len) {
      rSumArr[i] = 0;
      continue;
    }
    let sum = 0;
    for (let j = i + 1; j < len; j++) {
      sum = sum + nums[j];
    }
    rSumArr[i] = sum;
  }

  while (pointer < len) {
    let l = lSumArr[pointer];
    let r = rSumArr[pointer];

    if (l === r) {
      pivot = pointer;
      break;
    }
    ++pointer;
  }

  return pivot;
};
// pivotIndex([1, 7, 3, 6, 5, 6]);

function pivotIndex2(nums) {
  let sum = 0;
  let leftSum = 0;
  for (item of nums) {
    sum += item;
  }
  for (let i = 0; i < nums.length; ++i) {
    if (leftSum == sum - leftSum - nums[i]) return i;
    leftSum += nums[i];
  }
}

pivotIndex2([1, 7, 3, 6, 5, 6]);
