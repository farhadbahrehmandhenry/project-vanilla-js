class Stack {
  constructor() {
    this.list = [];
  }

  push(value) {
    this.list.push(value);

    return this.list;
  }

  pop() {
    this.list.pop()
  }
}

var stack = new Stack();

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)
stack.pop()
stack.pop()

console.log(stack)