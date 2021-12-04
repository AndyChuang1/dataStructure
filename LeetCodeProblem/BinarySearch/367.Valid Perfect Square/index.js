/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let l = 1;
  let r = num;

  while (r >= l) {
    const mid = l + ((r - l) >> 1);

    if (mid * mid == num) {
      return true;
    }

    if (mid * mid < num) {
      l = mid + 1;
    }
    if (mid * mid > num) {
      r = mid - 1;
    }
  }
  return false;
};

isPerfectSquare(16);
