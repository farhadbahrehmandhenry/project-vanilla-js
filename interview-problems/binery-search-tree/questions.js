const BST = require('./script.js');

var bst = new BST();
bst.add(20);
bst.add(4);
bst.add(12);
bst.add(39);
bst.add(25);
bst.add(14);
bst.add(11);
bst.add(23);
bst.add(34);
bst.add(15);
bst.add(22);
bst.add(2);
bst.add(32);
bst.add(27);
bst.add(16);
bst.add(31);

// sum of tree => 
var bstSum = (root) => {
  if (!root) return 0;

  return root.data + bstSum(root.left) + bstSum(root.right);
}

// max of tree => 
var bstMax = (root) => {
  if (!root) return 0;

  return Math.max(root.data, bstMax(root.left), bstMax(root.right));
}

// height of tree => 
var bstHeight = (root) => {
  if (!root) return 0;

  return 1 + Math.max(bstHeight(root.left), bstHeight(root.right));
}

// exists in tree => 
var bstIncludes = (root, value) => {
  if (!root) return false;
  if (root.data === value) return true;

  return value === root.data || bstIncludes(root.left, value) || bstIncludes(root.right, value);
}

// reverse the tree => 
var reverseTree = (root) => {
  if (!root) return;

  reverseTree(root.right);
  reverseTree(root.left);

  [root.left, root.right] = [root.right, root.left];
}

// traverse in order => sorts the tree
var inorderTraverse = (root) => {
  if (!root) return;

  inorderTraverse(root.left);
  console.log(root.data);
  inorderTraverse(root.right);
}

// traverse pre order => 
var preOrderTraverse = (root) => {
  if (!root) return;

  console.log(root.data);s
  preOrderTraverse(root.left);
  preOrderTraverse(root.right);
}

// traverse post order => 
var postOrderTraverse = (root) => {
  if (!root) return;

  postOrderTraverse(root.left);
  postOrderTraverse(root.right);
  console.log(root.data);
}

// is valid binery tree => 
var isValidBst = (root) => {
  if (!root) return;

  postOrderTraverse(root.left);
  postOrderTraverse(root.right);
  console.log(root.data);
}

// console.log(bstSum(bst.root));
// console.log(bstMax(bst.root));
// console.log(bstHeight(bst.root));
// console.log(bstIncludes(bst.root, 23));
// reverseTree(bst.root);
inorderTraverse(bst.root);
preOrderTraverse(bst.root);
postOrderTraverse(bst.root);