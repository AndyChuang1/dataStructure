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
var minDepth = function (root) {
  let depth = 0;
  let minDepth = 0;
  let quaue = [root];
  if (!root) return 0;
  while (quaue.length > 0) {
    depth++;
    let len = quaue.length;

    for (let i = 0; i < len; i++) {
      let curNode = quaue.shift();
      if (curNode.left) quaue.push(curNode.left);
      if (curNode.right) quaue.push(curNode.right);
      if (!curNode.left && !curNode.right) {
        // if(minDepth==0){
        //     minDepth = depth
        // }else{
        //     minDepth = Math.min(minDepth,depth)
        // }
        return depth;
      }
    }
  }
  // return minDepth ;
};
