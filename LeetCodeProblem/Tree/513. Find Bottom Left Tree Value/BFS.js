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
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  let queue = [root];
  let leftMost = root;
  let level = [];

  while (queue.length) {
    let node = queue.shift();
    if (node.left) level.push(node.left);
    if (node.right) level.push(node.right);

    if (!queue.length && level.length > 0) {
      queue = level;
      leftMost = level[0];
      level = [];
    }
  }
  return leftMost.val;
};

// Time complexity O(n) 遍歷每個節點
//Space complexity O(n)
