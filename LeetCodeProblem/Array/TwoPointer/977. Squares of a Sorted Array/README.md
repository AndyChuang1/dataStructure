# 977. Squares of a Sorted Array

Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

Example 1:

```
Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]
```

Example 2:

```
Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]
```

Note:

1 <= A.length <= 10000
-10000 <= A[i] <= 10000
A is sorted in non-decreasing order.

## Thoughts1

1. 使用 map 每個數組都平方
2. 使用 sort 排序

## Thoughts2 - twoPointer

1. 左右兩邊比較
2. 右邊比較大先放入陣列 右邊指標移動，反之
