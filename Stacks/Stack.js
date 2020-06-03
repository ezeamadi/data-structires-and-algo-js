import Node from "./Node";

// Stacks are used as Last-In-First-Out Abstract Data Structure
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(val) {
    // method to add to the stack

    var newNode = new Node(val); // create the node we want to add

    if (!this.first) {
      // if there is no first,
      this.first = newNode; // assign the first to the new node
      this.last = newNode; // assign the last to point to the first (dont use newNode here)
    } else {
      newNode.next = this.first; // point the 'next' of the new node to the old first.
      this.first = newNode; // assign the first to the new node
    }
    return ++this.length; // increment by 1 before returning
  }

  pop() {
    // method to remove from first
    if (!this.first) return "there is no node in the stack";

    var currentFirst = this.first; // save the first we want to remove to a variable.

    if (this.first === this.last) {
      //if we pop when there is only one item, update last
      this.last = null;
    }

    this.first = this.first.next; // re-assign the next node as the new first.
    this.length--; // reduce the length

    return currentFirst.val;
  }
}

// We used the shift and unshift methods of the linked list to implement our stack because the Time complexity is O(1) which is better than push and pop methods.
var stack = new Stack();
