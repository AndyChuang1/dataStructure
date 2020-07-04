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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) {
    return [];
  }
  let quaue = [root];
  let ans = [];

  while (quaue.length > 0) {
    let len = quaue.length;
    let arr = [];
    for (let i = 0; i < len; i++) {
      let node = quaue.shift();
      if (node.left) quaue.push(node.left);
      if (node.right) quaue.push(node.right);
      arr.push(node.val);
    }
    ans.unshift(arr);
  }
  return ans;
};
