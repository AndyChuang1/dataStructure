# 94. Binary Tree Inorder Traversal

Given a binary tree, return the inorder traversal of its nodes' values.

Example:

```
Input: [1,null,2,3]
   1
    \
     2
    /
   3
```

Output: [1,3,2]
Follow up: Recursive solution is trivial, could you do it iteratively?

## Thoughts Recursive

1. 中序遍尋 順序是 左>中>右
2. 使用 Recursive 先找左節點 當左節點為 null 代表已到底部，把當前 node.val push 到 visted[]
3. 左節點找完回到當前節點 繼續找右節點 重複 Step 2

## Thoughts iteratively Stack
