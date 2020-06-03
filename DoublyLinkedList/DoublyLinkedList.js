import Node from "./Node";

class DoublyLinkedList {
  constructor() {
    this.head = head;
    this.tail = tail;
    this.length = 0;
  }

  push(val) {
    //method to add to tail
    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.fLink = newNode;
      newNode.bLink = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // remove from tail
    if (!this.head) return "There are no items in the list";

    var current = this.tail; //save the node we want to pop

    if (this.length === 1) {
      // set the head and tail to null if there is only one node.
      this.head = null;
      this.tail = null;
    } else {
      this.tail = current.bLink;
      this.tail.fLink = null;
      currrent.bLink = null;
    }

    this.length--;
    return current;
  }

  shift() {
    // remove from front.
    if (this.length === 0) return "there are nodes to remove";

    var oldHead = this.head; // save to a variable

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.fLink; //set the next to be the new head
      this.head.bLink = null; // set the previous of the new head to be null
      oldHead.fLink = null;
    }
    this.length--;

    return oldHead; // return what we just removed.
  }

  unshift(val) {
    var newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.bLink = newNode;
      newNode.fLink = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return "Out of Bounds";

    if (index < this.length / 2) {
      var current = this.head;
      var counter = 0;
      while (counter !== index) {
        current = current.fLink;
        counter++;
      }
    } else {
      var current = this.tail;
      var counter = this.length - 1;

      while (counter !== index) {
        cureent = current.bLink;
        current--;
      }
    }
    return current;
  }

  set(index, val) {
    var foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return this;
    }

    return "there is no such node";
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return "no such item";

    if (index === this.length) {
      return this.push(val);
    }

    if (index === 0) {
      this.unshift(val);
      return this;
    }

    var newNode = new Node(val);
    var previous = this.get(index - 1);
    var next = this.get(index + 1);

    previous.fLink = newNode;
    newNode.bLink = previous;
    newNode.fLink = next;
    next.bLink = newNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return "Out of Bounds";

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    var previous = this.get(index - 1);
    var next = this.get(index + 1);
    var node2Delete = previous.fLink;

    previous.fLink = next;
    next.bLink = previous;
    this.length--;

    node2Delete.fLink = null;
    node2Delete.bLink = null;

    return node2Delete;
  }
}
