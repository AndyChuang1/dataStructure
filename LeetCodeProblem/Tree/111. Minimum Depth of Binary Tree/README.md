# 111. Minimum Depth of Binary Tree

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

```

    3
   / \
  9  20
    /  \
   15   7
```

return its minimum depth = 2.

## Thoughts -BFS

1. 遍歷每一層節點 ，每遍歷一層 depth +1
2. 當 node.left 與 node.right 為 null 的時候 return depth
3. 代表最小的深度就在這了
