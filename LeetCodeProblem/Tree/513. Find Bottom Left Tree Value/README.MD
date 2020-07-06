# 513. Find Bottom Left Tree Value

Given a binary tree, find the leftmost value in the last row of the tree.

Example 1:

```
Input:

    2
   / \
  1   3

Output:
1
```

Example 2:

```
Input:

        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7

Output:
7
```

Note: You may assume the tree (i.e., the given root node) is not NULL.

## Thoughts - BFS

1. 使用 level [] 記錄每一層的 node
2. 每一層的 level [0] 就是最左邊的節點了
3. 使用 BFS 遍歷每個一層節點
