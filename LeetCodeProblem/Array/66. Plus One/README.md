# 66. Plus One

Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

```
Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
```

```
Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
```

## Thoughts

1. 把陣列轉成 String
2. String 轉成 Number +1
3. Number 轉成 String
4. String 轉成陣列

- 一開始使用 Number() 轉換時 在 64bit Number.MAX_SAFE_INTEGER =
  253-1, or +/- 9,007,199,254,740,991
  大於數字 16 位就溢位了

- 如使用 BigInt() 就無這限制了

## Thoughts 2

1. 如果尾數小於 9 就+1 return digits;
2. 如果不小於 9 當下數字 等於 0 往下個數字前進
