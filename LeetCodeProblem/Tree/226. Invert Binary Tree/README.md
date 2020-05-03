# 226. Invert Binary Tree

Invert a binary tree.

Example:

Input:

```
     4
   /   \
  2     7
 / \   / \
1   3 6   9
```

Output:

```
     4
   /   \
  7     2
 / \   / \
9   6 3   1
```

# Thoughts

1. 使用 queue,shift 每個 node
2. node.left node.right 都倆倆互換
3. [4,left:2,right:7] 互換 => [4,left:7,right:2] 以此類推
