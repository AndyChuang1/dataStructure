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
