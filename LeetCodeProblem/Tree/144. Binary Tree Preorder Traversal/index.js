var preorderTraversal = function (root) {
  const stack = [];
  const visted = [];

  let cur = root;

  while (stack.length > 0 || cur) {
    if (cur) {
      visted.push(cur.val);
      stack.push(cur);
      cur = cur.left;
    } else {
      cur = stack.pop();
      cur = cur.right;
    }
  }
  return visted;
};

var preorderTraversal_recursive = function (root) {
  const visted = [];
  const preOrder = node => {
    if (!node) return;
    visted.push(node.val);
    if (node.left) {
      preOrder(node.left);
    }
    if (node.right) {
      preOrder(node.right);
    }
  };

  preOrder(root);
  return visted;
};
