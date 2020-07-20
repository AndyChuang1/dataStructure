var topKFrequent = function (nums, k) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let curNum = nums[i];
    if (!map.has(curNum)) {
      map.set(curNum, 1);
    } else {
      map.set(curNum, map.get(curNum) + 1);
    }
  }
  let result = Array.from(map)
    .sort((a, b) => {
      return b[1] - a[1];
    })
    .slice(0, k)
    .map(item => {
      return item[0];
    });
  return result;
};

topKFrequent([1, 1, 1, 2, 2, 2, 2, 3], 2);
