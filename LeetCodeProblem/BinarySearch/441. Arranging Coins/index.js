/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let l = 1;
  let r = n;

  const isCompleteRow = (value) => {
    let sum = 0;
    for (let i = 1; i <= value; ++i) {
      sum += i;
    }

    if (sum > n) {
      return false;
    } else {
      return true;
    }
  };
  while (r >= l) {
    const mid = l + ((r - l) >> 1);

    if (isCompleteRow(mid)) {
      l = mid + 1;
    }

    if (!isCompleteRow(mid)) {
      r = mid - 1;
    }
  }
  return l;
};
arrangeCoins(5);
