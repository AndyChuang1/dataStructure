# 83. Remove Duplicates from Sorted List

Given a sorted linked list, delete all duplicates such that each element appear only once.

```
Example 1:

Input: 1->1->2
Output: 1->2
```

```
Example 2:

Input: 1->1->2->3->3
Output: 1->2->3
```

## 思路

if current.val === current.next.val ; current.next = current.next.next
如果沒有的話 current = current.next;
重複做到 current or current.next 為 null 結束
最後 return 改好的 head
