# 347. Top K Frequent Elements

Given a non-empty array of integers, return the k most frequent elements.

Example 1:

```
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
```

Example 2:

```
Input: nums = [1], k = 1
Output: [1]
```

## Thoughts

1. 使用 hashmap 記錄數字出現的數量
2. 使用 Array.from(map)轉為 2 維陣列
3. 大到小作排序使用 slice 取前面 K
4. 再用 array.map 回傳 數字!!
