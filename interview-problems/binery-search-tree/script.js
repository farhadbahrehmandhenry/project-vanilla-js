class Node {
  constructor(data) {
    this.data = data
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (this.root === null) {
      this.root = new Node(value);
    }
    else {
      var addValue = (currentNode, value) => {
        if (value > currentNode.data) {
          if (currentNode.right === null) currentNode.right = new Node(value);
          else addValue(currentNode.right, value);
        }
        else {
          if (currentNode.left === null) currentNode.left = new Node(value);
          else addValue(currentNode.left, value);
        }
      }

      addValue(this.root, value);
    }
  }
}
module.exports = BST;
