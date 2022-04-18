class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinerySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }
    else {
      var currentNode = this.root;

      while(true) {
        if (value > currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return;
          }
          else {
            currentNode = currentNode.right;
          }
        } else {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return;
          }
          else {
            currentNode = currentNode.left;
          }
        }
      }
    }
  }
}

var bst = new BinerySearchTree();
bst.insert(10)
bst.insert(5)
bst.insert(2)
bst.insert(7)
bst.insert(13)
bst.insert(11)
bst.insert(16)

console.log(bst)