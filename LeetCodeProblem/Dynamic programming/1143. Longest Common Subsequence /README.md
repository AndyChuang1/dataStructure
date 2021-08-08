# 1143. Longest Common Subsequence

Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

Example 1:

```
Input: text1 = "abcde", text2 = "ace"
Output: 3
Explanation: The longest common subsequence is "ace" and its length is 3.
```

```
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
```

Example 3:

```
Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
```

Constraints:

1 <= text1.length, text2.length <= 1000
text1 and text2 consist of only lowercase English characters.

## Thoughts

Step 1

調表法
dp[] = m\*n 的 array

Step 2

一個一個字母比較
如果字母一樣就+1

```
 if(text[i]===text[j])
 dp[i][j] = dp[i][j] +1
```

Step 3

歸納出一些邊界條件導致 +1 與不＋ 1 的公式

i ==0 && j ==0

我們只需判斷第一個字是否相同
| | a | c |
|---|---|---|
| a| 1 | |
| b| | |

i == 0&& j!=0

這情況我們只要跟左邊比
如果 又遇到重複只能算一次

```
text1 = 'ac'
text2 = 'aa'
```

|     | a   | a   |
| --- | --- | --- |
| a   | 1   | 1   |
| c   |     |     |

i != 0 && j == 0

跟上面同, ij 互換而已

```
text1 = 'ab'
text2 = 'ac'
```

|     | a   | c   |
| --- | --- | --- |
| a   | 1   | 1   |
| b   | 1   |     |

i!=0 && j != 0
如果 text[i]===text[j])

```
text1 = 'acb'
text2 = 'acc'
```

|     | a   | c   | b   |
| --- | --- | --- | --- |
| a   | 1   | 1   | 1   |
| c   | 1   | 2   | 2   |
| c   | 1   | 2   | 2   |

那就是 DP[i-1][j -1] + 1

不同 就是 max(DP[i-1][j] , DP[i][j-1])

為什麼

```
text1 = 'abc'
text2 = 'acc'
```

|     | a   | b   | c   |
| --- | --- | --- | --- |
| a   | 1   | 1   | 1   |
| c   | 1   | 1   | 2   |
| c   | 1   | 1   | 2!  |

```
text1 = 'ace'
text1 = 'abcde'
```

|     | a   | b   | c   | d   | e   |
| --- | --- | --- | --- | --- | --- |
| a   | 1   | 1   | 1   | 1   | 1   |
| c   | 1   | 1   | 2   | 2   | 2   |
| e   | 1   | 1   | 2   | 2   | 3   |

`return dp[m-1][n-1]`
