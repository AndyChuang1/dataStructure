/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  const n = text2.length;

  const dp = new Array(m).fill().map(() => {
    return new Array(n).fill(0);
  });

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (text1[i] === text2[j]) {
        if (i === 0 && j === 0) {
          dp[i][j] = dp[i][j] + 1;
          continue;
        }
        if (i === 0 && j !== 0) {
          dp[i][j] = dp[i][j] + 1;
          continue;
        }
        if (i !== 0 && j === 0) {
          dp[i][j] = dp[i][j] + 1;
          continue;
        }
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        if (i === 0 && j === 0) {
          dp[i][j] = dp[i][j];
          continue;
        }
        if (i === 0 && j !== 0) {
          dp[i][j] = Math.max(dp[i][j], dp[i][j - 1]);
          continue;
        }
        if (i !== 0 && j === 0) {
          dp[i][j] = Math.max(dp[i][j], dp[i - 1][j]);
          continue;
        }
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m - 1][n - 1];
};

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequenceDP = function (text1, text2) {
  const m = text1.length;
  const n = text2.length;

  const dp = new Array(m + 1).fill().map(() => {
    return new Array(n + 1).fill(0);
  });
  const text1P = 'p' + text1;
  const text2P = 'p' + text2;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1P[i] === text2P[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
};

longestCommonSubsequenceDP('ace', 'abcde');
