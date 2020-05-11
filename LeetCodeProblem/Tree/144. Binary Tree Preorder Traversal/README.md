Given a binary tree, return the preorder traversal of its nodes' values.

Example:

```
Input: [1,null,2,3]
   1
    \
     2
    /
   3
```

Output: [1,2,3]
Follow up: Recursive solution is trivial, could you do it iteratively?

# Thought

1. 前序 為 根 > 左 > 右
2. 當該節點有值 把 node.value push 到 visted[], 然後該節點 push 進 stack ,改節點前往 左節點 cur = cur.left
3. 如果該節點無值 把 stack 節點取出來 開始找右節點
