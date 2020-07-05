/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let ans = [];
  while (queue.length) {
    let arr = [];
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      arr.push(node.val);
      if (node.children.length > 0) {
        node.children.forEach(childNode => {
          queue.push(childNode);
        });
      }
    }
    ans.push(arr);
  }
  return ans;
};
