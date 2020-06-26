/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let vSet = new Set('aeiou');
  let vowelNum = 0;

  for (let i = 0; i < k; i++) {
    if (vSet.has(s[i])) vowelNum++;
  }
  let curMax = vowelNum;

  for (let i = k; i < s.length; i++) {
    if (vSet.has(s[i])) vowelNum++;
    if (vSet.has(s[i - k])) vowelNum--;
    curMax = Math.max(vowelNum, curMax);
  }
  return curMax;
};

// maxVowels('abciiidef', 3);

var maxVowels2 = function (s, k) {
  let vSet = new Set('aeiou');
  let vowelNum = 0;
  let l = 0;
  let max = 0;

  for (let r = 0; r < s.length; r++) {
    if (vSet.has(s[r])) vowelNum++;
    while (r - l + 1 > k) {
      if (vSet.has(s[l])) {
        vowelNum--;
      }
      l++;
    }
    max = Math.max(vowelNum, max);
  }
  return max;
};
maxVowels2('abciiidef', 3);
