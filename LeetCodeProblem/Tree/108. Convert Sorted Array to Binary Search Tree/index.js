// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) return null;

  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);

  const leftTree = nums.slice(0, mid);
  root.left = sortedArrayToBST(leftTree);

  const rightTree = nums.slice(mid + 1, nums.length);
  root.right = sortedArrayToBST(rightTree);

  return root;
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
