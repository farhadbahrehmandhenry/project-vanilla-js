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
// [10, 5, 13, 2, 7, 11, 16]

var bfs = (bst) => {
  var queue = [bst.root];
  var array = [];

  while (queue.length > 0) {  
    var node = queue.shift();
    array.push(node.value);
  
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return array;
}

console.log(bfs(bst))