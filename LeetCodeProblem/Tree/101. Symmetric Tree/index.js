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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }

  function isSymmetricTree(left, right) {
    if (!left || !right) {
      return left === right;
    }

    if (left.val !== right.val) {
      return false;
    }

    return isSymmetricTree(left.left, right.right) && isSymmetricTree(left.right, right.left);
  }

  return isSymmetricTree(root, root);
};

function isSymmetric＿stack(root) {
  if (!root) return true;

  const l = [root.left];
  const r = [root.right];

  while (l.length && r.length) {
    const le = l.pop();
    const re = r.pop();
    if (le === re) continue; //如果都是null 就會繼續while
    if (le && re) {
      if (le.val != re.val) return false;
      //找尋對稱 le.right === re.left
      l.push(le.right);
      l.push(le.left);
      r.push(re.left);
      r.push(re.right);
      continue;
    }
    return false;
  }
  return true;
}
