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
  const findSeq = tree => {
    let seq = [];

    const DFS = tree => {
      if (!tree) return;
      if (!tree.left && !tree.right) {
        seq.push(tree.val);
      }
      if (tree.left) DFS(tree.left);
      if (tree.right) DFS(tree.right);
    };

    DFS(tree);
    return seq;
  };

  const seq1 = findSeq(root1);
  const seq2 = findSeq(root2);

  return seq1.length === seq2.length && seq1.every((val, index) => val === seq2[index]);
};
