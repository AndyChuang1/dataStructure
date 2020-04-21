# 21. Merge Two Sorted Lists

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

```
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
```

## 思路

讀取 L1 目前的值與 L2 目前的值比較，如果 L1.val < L2.val，將當前的 L1 節點加入新的連結串列(result)，然後 L1 指向下一個節點。 如果 L1.val > L2.val 較小，則把 L2 當前的節點加到 result，直到 L1 或 L2 一方為 null 則停止比較，並且將另外一邊剩下的節點加入 result。
