# 101. Symmetric Tree

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

```
    1
   / \
  2   2
 / \ / \
3  4 4  3
```

But the following [1,2,2,null,3,null,3] is not:

```
    1
   / \
  2   2
   \   \
   3    3
```

Follow up: Solve it both recursively and iteratively.

## Thoughts recursive

1.  做一個 recursive function，左右比較值是否相同
2.  left 的左子樹 必須與 right 的右子樹相同 ＆＆ left 的右子樹 必須與 right 的左子樹相同 達成對稱
3.  以上圖 1 左樹 2 的左子樹 3 必須與右樹 2 的右子樹 3 相等

## Thoughts stack

1. 創造左右兩邊 stack
2. 依依 pop 出來比對 都一樣就代表對稱
