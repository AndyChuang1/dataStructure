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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
  let sum = 0;

  const DFSSum = (node, L, R) => {
    if (!node) return;

    if (node.val >= L && node.val <= R) {
      sum += node.val;
      DFSSum(node.left, L, R);
      DFSSum(node.right, L, R);
    }
    if (node.val < L) {
      DFSSum(node.right, L, R);
    }
    if (node.val > R) {
      DFSSum(node.left, L, R);
    }
  };
  DFSSum(root, L, R);
  return sum;
};
