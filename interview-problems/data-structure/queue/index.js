class Queue {
  constructor() {
    this.list = [];
  }

  push(value) {
    this.list.push(value);
  }

  pop() {
    this.list.shift()
  }
}

var queue = new Queue();

queue.push(1)
queue.push(2)
queue.push(3)
queue.push(4)
queue.push(5)
queue.push(6)
queue.pop()
queue.pop()

console.log(queue)

