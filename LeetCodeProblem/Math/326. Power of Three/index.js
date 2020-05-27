/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree1 = function (n) {
  let maxInt = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < maxInt; i++) {
    const pow = Math.pow(3, i);
    if (pow > n) return false;
    if (pow === n) return true;
  }
};

var isPowerOfThree_While = function (n) {
  while (n > 1) {
    n = n / 3;
  }
  return n === 1 ? true : false;
};

var isPowerOfThree_rec = function (n) {
  const rec = n => {
    if (n < 1) return false;

    if (n === 1) return true;

    return rec(n / 3);
  };

  return rec(n);
};
