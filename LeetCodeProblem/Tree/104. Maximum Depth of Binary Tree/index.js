/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/*Breadth-First Search*/
var maxDepth = function (root) {
  if (!root) return 0;
  let queue = [root];
  let max = 0;
  while (queue.length > 0) {
    let len = queue.length;
    max++;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return max;
};

//Depth-First Search Recursive
var maxDepthRecursive = function (root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
