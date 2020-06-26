/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function (A, K) {
  let left = 0,
    right = 0;

  while (right < A.length) {
    if (A[right] === 0) K--;
    if (K < 0) {
      if (A[left] === 0) K++;
      left++;
    }
    right++;
  }
  return right - left;
};

longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2);
// longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1], 0);

//這比較好懂，但效率差一點
var longestOnes = function (A, K) {
  let l = 0;
  let changeNum = 0;
  let ans = 0;

  for (let r = 0; r < A.length; r++) {
    //記錄用過K的次數
    if (A[r] === 0) changeNum++;
    //超過K時 l開始移動，遇到0代表之前有改過，就把他去掉
    while (changeNum > K) {
      if (A[l] === 0) {
        changeNum--;
      }
      l++;
    }
    ans = Math.max(ans, r - l + 1);
  }

  return ans;
};
