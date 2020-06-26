var characterReplacement = function (s, k) {
  let left = 0,
    right = 0,
    mostFreq = 0,
    maxLen = 0;
  let freqMap = {};

  for (right = 0; right < s.length; right++) {
    // 記錄字元出現頻率
    freqMap[s[right]] = freqMap[s[right]] + 1 || 1;
    // 找出最大字元出現頻率
    mostFreq = Math.max(freqMap[s[right]], mostFreq);
    // 當window 扣除最大字元出現頻率 還是大於K 代表l要移動
    while (right - left + 1 - mostFreq > k) {
      freqMap[s[left]] -= 1;
      left++;
    }
    maxLen = Math.max(right - left + 1, maxLen);
  }
  return maxLen;
};
// characterReplacement('ABAB', 2);
characterReplacement('AABABBB', 1);

//使用es6
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let l = 0;
  let mostFreq = 0;
  let maxLen = 0;
  let strMap = new Map();

  for (let r = 0; r < s.length; r++) {
    if (!strMap.has(s[r])) {
      strMap.set(s[r], 1);
    } else {
      strMap.set(s[r], strMap.get(s[r]) + 1);
    }
    mostFreq = Math.max(mostFreq, strMap.get(s[r]));

    while (r - l + 1 - mostFreq > k) {
      strMap.set(s[l], strMap.get(s[l]) - 1);
      l++;
    }
    maxLen = Math.max(maxLen, r - l + 1);
  }
  return maxLen;
};
