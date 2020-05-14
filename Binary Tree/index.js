class Node {
  constructor(data) {
    this.val = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    // root of a binary seach tree
    this.root = null;
  }

  // function to be implemented
  insert(data) {
    let newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(node, newNode) {
    if (newNode.val < node.val) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // remove(data)

  // Helper function
  // findMinNode()
  // getRootNode()
  // inorder(node)
  // preorder(node)
  // postorder(node)
  // search(node, data)
}
const Tree = new BinarySearchTree();
Tree.insert(1);
Tree.insert(2);
// Tree.insert(3);
// Tree.insert(4);
// Tree.insert(5);
// Tree.insert(6);
// Tree.insert(7);
console.log(Tree);

module.exports = BinarySearchTree;
