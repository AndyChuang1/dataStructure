# 167. Two Sum II - Input array is sorted

Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.
Example:

```
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
```

# Thoughts - hashTable

1. 一個 for 從 hashTable 找到對應的值與 index
2. 以上題為例 Target = 9 , num[0] = 2 , Target-num[0] = 7 為對應的值

# Thoughts - TwoPointer

1. 使用左右兩點 l , R
2. 因為 Array 是排序過的，兩點相加 如果 nums[l]+nums[R] > target 表示數值太大，R 左移讓相加數字減少
3. 兩點相加 如果 nums[l]+nums[R] <> target 表示數值太小，l 左移讓相加數字增加，直到 nums[l]+nums[R] == target
