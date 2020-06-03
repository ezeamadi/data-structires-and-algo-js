import Node from "./Node";

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    // method to insert nodes into a bst.

    var newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    var current = this.root;
    while (true) {
      if (value === current.value) {
        // means there is an equal value in the BST.
        return "this value already exists in the binary search tree.";
      }

      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false;

    var current = this.root;
    var found = false;

    while (current && !found) {
      if (value < current.value) current = current.left;
      else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) return "there is no node with that value";
    return current;
  }
}

var bst = new BinarySearchTree();
