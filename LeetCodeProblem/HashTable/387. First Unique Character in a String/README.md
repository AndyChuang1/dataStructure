# 387. First Unique Character in a String

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

```
s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
```

Note: You may assume the string contain only lowercase letters.

## Thoughts

1. 使用 hashTable
2. 想要找到第一個不重複的字符，那首先要定義出“不重複的字符”，而想要判斷一個字符是不是“不重複的字符”，那首先 for 一遍字符串就是必須的了。在遍歷字符串時，我們記錄下每個字符的出現次數，而後再次遍歷字符串，當遇到第一個出現次數為 1 時，就可以 return 當下 index 了。
3. 在記錄字符出現次數時應該用 Map 結構（key 為字符，value 為出現次數）
