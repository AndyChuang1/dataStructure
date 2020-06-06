var nextGreaterElements = function (nums) {
  const result = [];
  const doubleNums = [...nums, ...nums];
  for (let i = 0; i < nums.length; i++) {
    let isFind = false;
    for (let j = i; j < doubleNums.length; j++) {
      if (doubleNums[i] < doubleNums[j]) {
        result.push(doubleNums[j]);
        isFind = true;
        break;
      }
    }
    if (!isFind) result.push(-1);
  }
  return result;
};

//Time complexity Ｏ(n^2) 因為有doubleNums 最壞情況最後一個值才找到
//Space complexity 使用到doubleNums 2n O(n)
