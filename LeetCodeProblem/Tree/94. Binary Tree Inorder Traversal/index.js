/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal_Recursive = function (root) {
  const visted = [];
  const inOrder = function (node) {
    if (!node) return;
    if (node.left) {
      inOrder(node.left);
    }
    visted.push(node.val);
    if (node.right) {
      inOrder(node.right);
    }
  };
  inOrder(root);
  return visted;
};

var inorderTraversal_iteratively = function (root) {
  const stack = [];
  const visted = [];
  let cur = root;

  while (stack.length > 0 || cur) {
    //把左邊節點都push到stack
    if (cur) {
      stack.push(cur);
      cur = cur.left;
      //當左邊節點到底了 Pop出來做處理
      //在做右邊節點
    } else {
      cur = stack.pop();
      visted.push(cur.val);
      cur = cur.right;
    }
  }
  return visted;
};
