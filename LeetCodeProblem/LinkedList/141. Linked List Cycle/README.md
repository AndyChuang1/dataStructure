# 141. Linked List Cycle

Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

Example 1:

```
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the second node.
```

![example!](./circularlinkedlist.png)

Example 2:

```
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the first node.
```

![example2](./circularlinkedlist_test2.png)

Example 3:

```
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
```

![example2](./circularlinkedlist_test3.png)

## Thougsts

1. 使用 hash table
2. while (node.next),
3. 判斷 node 是否存在 hash table 裡,有的話代表有 cycle return true;
4. 當 node.next ＝＝＝ null 表示沒有 cycle return false;

5. 使用 two pointer
6. slow 一次動一步,fast 一次動兩步
7. 如有 cycle 最後一定會遇到 ,slow == fast;
