# 118. Pascal's Triangle

Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
![img](./PascalTriangleAnimated2.gif)

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

```
Input: 5
Output:
Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
```

## Thoughts

1. 第一筆與最後一筆都填上 1;
2. 中間部分的找上一次的結果 兩兩相加
