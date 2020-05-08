/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let result = n;
  let set = new Set();

  while (result != 1) {
    const num = result.toString().split('');
    result = num.reduce((pre, cur) => {
      return (pre += Math.pow(cur, 2));
    }, 0);
    if (set.has(result)) {
      return false;
    } else {
      set.add(result);
    }
  }
  return true;
};

console.log(isHappy(18));
