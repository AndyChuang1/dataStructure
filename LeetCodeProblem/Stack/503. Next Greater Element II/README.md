# 503. Next Greater Element II

Given a circular array (the next element of the last element is the first element of the array), print the Next Greater Number for every element. The Next Greater Number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, output -1 for this number.

Example 1:

```
Input: [1,2,1]
Output: [2,-1,2]
Explanation: The first 1's next greater number is 2;
The number 2 can't find next greater number;
The second 1's next greater number needs to search circularly, which is also 2.
```

Note: The length of given array won't exceed 10000.

## Thoughts - Brute Force

1. 創造 doubleNums [...nums,...nums] 模擬循環;
2. 跑雙迴圈 依依比較
   Time complexity O(n^2) 雙迴圈都要跑完 n
   Space complexity O(n) result 佔 n 個空間

## Thoughts - Stack

我們可以用一個 stack 來記錄，遇到比 stack.top 小的數字就放入棧中，遇到比 stack.top 大的數字就說明這是 stack.top 數字的下一個更大的數，就將其放在結果數組的對應位置上
