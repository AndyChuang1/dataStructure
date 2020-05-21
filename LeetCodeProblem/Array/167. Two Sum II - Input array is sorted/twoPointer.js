var twoSum = function (numbers, target) {
  const len = numbers.length;
  let l = 0;
  let r = len - 1;

  while (numbers[l] + numbers[r] !== target) {
    if (numbers[l] + numbers[r] > target) {
      r--;
    }
    if (numbers[l] + numbers[r] < target) {
      l++;
    }
  }

  return [l + 1, r + 1];
};

console.log(twoSum([5, 25, 75], 100));
