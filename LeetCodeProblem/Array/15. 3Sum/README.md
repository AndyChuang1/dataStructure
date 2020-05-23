# 15. 3Sum

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

```
Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

## Thoughts - BruteForce

1. 把陣列做排序，確保等等重複得 triplets 的 key 是一樣的
2. 跑三個 for 迴圈 當滿足 a + b + c = 0 沒有重複的紀錄就記錄到陣列裡
