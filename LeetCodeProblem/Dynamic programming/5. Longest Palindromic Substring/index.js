/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let maxPStr = s[0];

  for (let i = 0; i < s.length; ++i) {
    for (let j = 1; j <= s.length; ++j) {
      let checkStr = s.slice(i, j);
      let validP = checkPalindromic(checkStr);
      if (validP) {
        maxPStr = maxPStr.length < checkStr.length ? checkStr : maxPStr;
      }
    }
  }
  return maxPStr;
};

var checkPalindromic = function (str) {
  let l = 0;
  let r = str.length - 1;

  while (l < r) {
    if (str[l] === str[r]) {
      l++;
      r--;
    } else {
      return false;
    }
  }

  return true;
};
