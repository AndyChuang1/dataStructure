/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const DFS = tree => {
    let stack = [];
    let cur = tree;
    let seq = [];
    while (stack.length > 0 || cur) {
      if (cur) {
        if (!cur.left && !cur.right) {
          seq.push(cur.val);
        }
        stack.push(cur);
        cur = cur.left;
      } else {
        cur = stack.pop();
        //visted.push(cur)
        cur = cur.right;
      }
    }
    return seq;
  };

  const seq1 = DFS(root1);
  const seq2 = DFS(root2);

  return seq1.length === seq2.length && seq1.every((val, i) => val === seq2[i]);
};
