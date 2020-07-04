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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  if (!root) return false;
  let map = new Map();
  let queue = [root];
  let depth = -1;
  while (queue.length > 0) {
    depth++;
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node.left) {
        queue.push(node.left);
        map.set(node.left.val, { depth: depth + 1, parent: node.val });
      }
      if (node.right) {
        queue.push(node.right);
        map.set(node.right.val, { depth: depth + 1, parent: node.val });
      }
      if (!map.get(node.val)) {
        map.set(node.val, { depth: depth, parent: null });
      }
    }
  }

  let foundX = map.get(x);
  let foundY = map.get(y);

  return foundX.depth === foundY.depth && foundX.parent !== foundY.parent ? true : false;
};
