import Node from "./Node";

class SinglyLinkedList {
  constructor() {
    this.head = null; //set head to null
    this.tail = null; //set tail to null
    this.length = 0; // there is nothing in the list yet.
  }

  push(val) {
    // this ia a method that appends a Node at the tail.
    var newNode = new Node(val); // create a new node.

    if (!this.head) {
      // if nothing in the list, both head and tail will point to the new node.
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1; // whatever happens, increase the length by one;
    return this; // return the whole linked list.
  }

  pop() {
    // method to remove an item at the end of linkedlist
    if (!this.head) return "there is nothing in the list";

    var current = this.head;
    var newTail = current;

    // traverse the list and look for the last node.
    while (current.next) {
      // as long as there is a next node, even if it is null.
      newTail = current; // first assign that current as the new tail.
      current = current.next; // move one step ahead.
    }

    this.tail = newTail; // after the loop, the element before the last becomes the new tail.
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    // method to remove from head
    if (!this.head) return "there is no node in the linked list";

    var currentHead = this.head; // save the head we want to remove to a variable.
    this.head = currentHead.next; // re-assign the next node as the new head.
    this.length--; // reduce the length

    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }

  unshift(val) {
    // method to append to the head.

    var newNode = new Node(val); // create the node we want to append

    if (!this.head) {
      // if there is no head,
      this.head = newNode; // assign the head to the new node
      this.tail = this.head; // assign the tail to point to the head (dont use newNode here)
    }

    newNode.next = this.head; // point the 'next' of the new node to the old head.
    this.head = newNode; // assign the head to the new node
    this.length++;
    return this; // return the whole array.
  }

  get(index) {
    // method to find the index of a node
    if (index < 0 || index >= this.length) return -1;

    var counter = 0;
    var current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    // method to set the value of a particular node at an index
    var foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return this;
    }
    return "there is no such node";
  }

  insert(index, val) {
    // method to insert a node at a given index.
    if (index < 0 || index > this.length) return -1;

    if (index === this.length) {
      // push to the tail and return linked list
      this.push(val);
      return this;
    }
    if (index === 0) {
      this.unshift(val);
      return this;
    }

    var newNode = new Node(val);
    var previous = this.get(index - 1);

    var temp = previous.next; // save the prev's next in a temp variable.
    previous.next = newNode; // assign the next of the previous to be the new node
    newNode.next = temp; // the new node's next will then be the temp - which was the previous' next.

    this.length++;
    return this;
  }

  remove(index) {
    // method to remove an item from the middle.
    if (index < 0 || index >= this.length) return -1;

    if (index === 0) return this.shift();

    if (index === this.length - 1) return this.pop();

    var previousNode = this.get(index - 1); // get the node before the one we want to delete

    var node2Delete = previousNode.next; // assign the node we want to delete to a variable.

    previousNode.next = node2Delete.next; // assign the deleted node's next to be the previousNode's next.

    this.length--;
    return node2Delete;
  }

  reverse() {
    // method to reverse a linked list and make its head to be the tail and its tail to be the head.

    var temp = this.head;
    this.head = this.tail; // assign the tail to be the head

    this.tail = temp; // assign temp storage to be the tail
    var next;
    var previous = null;

    for (var i = 0; i < this.length; i++) {
      next = temp.next; // set next to be the temp's (which is tail at first iteration) next.

      temp.next = previous;
      previous = temp;
      temp = next;
    }
    return this;
  }

  printList() {
    // method to visualize everything we are doinfif we need to.
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

var list = new SinglyLinkedList();
