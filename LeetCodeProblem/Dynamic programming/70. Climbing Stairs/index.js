/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let cache = new Map();
  const helper = n => {
    if (n <= 3) {
      cache.set(n, n);
      return n;
    }
    if (!cache.has(n)) {
      cache.set(n, helper(n - 1) + helper(n - 2));
    }
    return cache.get(n);
  };

  return helper(n);
};
