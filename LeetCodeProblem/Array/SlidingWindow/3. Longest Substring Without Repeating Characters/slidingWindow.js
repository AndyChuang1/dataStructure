/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let r = 0,
    l = 0;
  let set = new Set();
  let longLength = 0;

  while (r < s.length) {
    if (!set.has(s[r])) {
      set.add(s[r]);
      longLength = Math.max(longLength, r - l + 1);
      r++;
    } else {
      set.delete(s[l]);
      l++;
    }
  }
  return longLength;
};

//Time complexity = O(n)
//Space complexity = O(n) 因為有用到 set
