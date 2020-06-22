# 713. Subarray Product Less Than K

Your are given an array of positive integers nums.

Count and print the number of (contiguous) subarrays where the product of all the elements in the subarray is less than k.

Example 1:

```
Input: nums = [10, 5, 2, 6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are: [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
```

Note:

- `0 < nums.length <= 50000.`
- `0 < nums[i] < 1000.`
- `0 <= k < 10^6.`

## Thoughts1- brute force

1. 跑 2 個 for 迴圈 ，不斷判斷乘積 滿足條件 count++
2. 但是這樣的話 可能會造成 效能不佳,因為會有多餘的運算， Time complexity 為 O(n^2)

## Thoughts2- Sliding Window

1. 當乘積 < k R window 不斷往右跑，並記錄符合條件的數量
2. 黨乘積 > k L window 往右跑 縮小乘積範圍
