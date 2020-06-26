# 424. Longest Repeating Character Replacement

Given a string s that consists of only uppercase English letters, you can perform at most k operations on that string.

In one operation, you can choose any character of the string and change it to any other uppercase English character.

Find the length of the longest sub-string containing all repeating letters you can get after performing the above operations.

Note:
Both the string's length and k will not exceed 104.

Example 1:

```
Input:
s = "ABAB", k = 2

Output:
4

Explanation:
Replace the two 'A's with two 'B's or vice versa.
```

Example 2:

```
Input:
s = "AABABBA", k = 1

Output:
4

Explanation:
Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
```

## Thoughts

1. 因為是字串必須搭配 hashMap 來記錄字元出現的頻率
2. 再配合 sliding window 尋找最大連續長度的字串
3. 當 r-l+1 - 最大字元頻率 >k 代表已經超過可改的次數 windowStr 往右移，並把移動隻字元頻率扣除
