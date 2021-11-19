/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function (n, quantities) {
  let l = 0;
  let r = Math.max(...quantities);

  while (r >= l) {
    const mid = Math.floor((l + r) / 2);

    if (canDistribute(mid, n, quantities)) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  console.log(r, l);
};

function canDistribute(k, n, quantities) {
  let store = 1;

  for (let q of quantities) {
    while (q > 0) {
      if (store > n) {
        return false;
      }

      q -= k;
      store++;
    }
  }

  return true;
}
minimizedMaximum(6, [11, 6]);
