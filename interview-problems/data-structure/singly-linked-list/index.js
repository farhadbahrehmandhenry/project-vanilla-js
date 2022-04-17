class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    var newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++; 
  }
}

var list = new SingleLinkedList();
list.push("one")
list.push("two")
list.push("three")
list.push("four")
list.push("five")

console.log(list)