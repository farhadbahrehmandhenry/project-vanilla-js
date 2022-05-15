const BST = require('./index.js');

var bst = new BST();
bst.insert(10)
bst.insert(5)
bst.insert(2)
bst.insert(7)
bst.insert(13)
bst.insert(11)
bst.insert(16)

//            10
//        5      13
//      2   7   11  16


// preOrder => [10, 5, 2, 7, 13, 11, 16]
var preOrder = (bst) => {
  var array = [];
  var node = bst.root;

  var helper = (node) => {
    array.push(node.value);

    if (node.left) helper(node.left);
    if (node.right) helper(node.right);
  }

  helper(node);

  return array;
}

// console.log(preOrder(bst));

// postOrder => [2, 7, 5, 11, 16, 13, 10]
var postOrder = (bst) => {
  var array = [];
  var node = bst.root;

  var helper = (node) => {
    if (node.left) helper(node.left);
    if (node.right) helper(node.right);
    array.push(node.value);
  }

  helper(node);

  return array;
}

// console.log(postOrder(bst));

// postOrder => [2, 5, 7, 10, 11, 13, 16]
var inOrder = (bst) => {
  var array = [];
  var node = bst.root;

  var helper = (node) => {
    if (node.left) helper(node.left);
    array.push(node.value);
    if (node.right) helper(node.right);
  }

  helper(node);

  return array;
}

// console.log(inOrder(bst));