/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let hashMap = new Map();
  let result = 0;
  let perfactCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (hashMap.has(s[i])) {
      hashMap.set(s[i], hashMap.get(s[i]) + 1);
    } else {
      hashMap.set(s[i], 1);
    }
  }
  // if only one letter return s.length
  if (hashMap.size === 1) {
    return s.length;
  }

  for (let value of hashMap.values()) {
    // if number of letter is even ,those letters can be Palindrome
    if (value % 2 === 0) {
      result += value;
      usedCount += 1;
    }
    // if number of letter is odd , number of letter  -1  can be Palindrome
    if (value % 2 === 1) {
      result += value - 1;
    }
  }

  // if usedCount != hashMap.size means can pick 1 letter be Palindrome;
  return usedCount === hashMap.size ? result : result + 1;
};
