/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var invertTree = function (root) {
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    let temp;
    if (node) {
      temp = node.left;
      node.left = node.right;
      node.right = temp;
      queue.push(node.left, node.right);
    }
  }
  return root;
};

var invertTree_Recursive = function (root) {
  if (!root) {
    return null;
  }
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};
