/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  let temp = 0;
  for (let i = 0; i < s.length; ) {
    let currentS = s[i];
    let nextS = s[i + 1];
    if (map[currentS] < map[nextS]) {
      result = map[nextS] - map[currentS] + temp;
      temp = result;
      i += 2;
    } else {
      result += map[currentS];
      temp = result;
      i++;
    }
  }
  return result;
};
