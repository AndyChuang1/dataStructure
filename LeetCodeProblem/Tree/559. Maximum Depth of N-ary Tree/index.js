/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;

  let depth = 0;
  let quaue = [{ node: root, level: 1 }];
  while (quaue.length > 0) {
    const { node, level } = quaue.shift();
    if (level > depth) depth = level;

    if (node.children.length > 0) {
      node.children.forEach(cNode => {
        quaue.push({ node: cNode, level: level + 1 });
      });
    }
  }

  return depth;
};
