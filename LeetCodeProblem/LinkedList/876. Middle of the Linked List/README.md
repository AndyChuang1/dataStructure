876. Middle of the Linked List

Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

Example 1:

```
Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3. (The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
```

Example 2:

```
Input: [1,2,3,4,5,6]
Output: Node 4 from this list (Serialization: [4,5,6])
Since the list has two middle nodes with values 3 and 4, we return the second one.
```

Note:

The number of nodes in the given list will be between 1 and 100.

## Thoughts1

1. 跑完一次 linked list 紀錄 長度
2. 再跑一次 for 長度/2 就可以拿到長度/2 就可以得到中間值

## Thoughts2 - Fast & Slow Pointer

基本上呢，做法就是指定兩個 pointer - fast 跟 slow，一開始 slow 跟 fast 都指向 head，接下來，在 fast 走到 linked list 的底端前，fast 一次走兩步，slow 一次走一步，當 fast 走到底的時候，slow 就會在中間。
