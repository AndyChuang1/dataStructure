# 496. Next Greater Element I

You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2. Find all the next greater numbers for nums1's elements in the corresponding places of nums2.

The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, output -1 for this number.

Example 1:

```
Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
Output: [-1,3,-1]
Explanation:
    For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
    For number 1 in the first array, the next greater number for it in the second array is 3.
    For number 2 in the first array, there is no next greater number for it in the second array, so output -1.
```

Example 2:

```
Input: nums1 = [2,4], nums2 = [1,2,3,4].
Output: [3,-1]
Explanation:
    For number 2 in the first array, the next greater number for it in the second array is 3.
    For number 4 in the first array, there is no next greater number for it in the second array, so output -1.
```

Note:
All elements in nums1 and nums2 are unique.
The length of both nums1 and nums2 would not exceed 1000.

## Thoughts -brutal

1. 有 2 個集合, 集合 1 內的每個值要在集合 2 找到相等值, 然後再往右找到比它大的值, 取代集合 1 的原值, 找不到的話就以-1 取代
2. nums1 找到 nums2 相對的位置
3. 之後向右找下一個比 nums1 大的數值
   Time complexity O(mn) 因為第二個迴圈 不是從 n 開始

## Thoughts -Stack

1. 使用 stack 與 hashmap 解
2. 使用 stack 找到 nums2[i]右邊一個比較大的數值放進 map 裡
3. 在使用 nums1 找出數字對應的結果
