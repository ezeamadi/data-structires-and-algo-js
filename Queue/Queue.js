import Node from "./Node";

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val) {
    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return ++this.length;
  }

  dequeue() {
    if (!this.head) return "There are no items in the queue";

    var node2Delete = this.head;

    if (this.head === this.tail) {
      this.tail = null;
    }
    this.head = this.head.next;
    this.length--;
    return node2Delete.value;
  }
}

var q = new Queue();
