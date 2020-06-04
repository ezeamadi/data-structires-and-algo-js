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

  breadthFirstSearch() {
    var data = [];
    var queue = [];
    var node = this.root;
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  // DEPTH - FIRST SEARCHES
  preOrder() {
    // Method to visit a node, visit the entire left side of the node and print all value, then visit the entire right side of that node then go up and vidit the right side of the previous node that we visited before etc.
    // Visit the root, look at the left side which is the number less than it, later the right and go through the tree like that.

    var visited = [];
    var current = this.root;

    function traverse(node) {
      // push into the array before you traverse.
      visited.push(node.value);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return visited;
  }

  postOrder() {
    // traverses the tree and starts printing from the smallest number in the tree. Then prints its sibling and then its parents.

    var data = [];
    var current = this.root;
    function traverse(node) {
      //  push into the array after you traversed
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(current);
    }

    traverse(current);
    return data;
  }

  inOrder() {
    // method that traverses all the node and prints according to their values.

    var data = [];
    var current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);

      //  push into the array after you traversed
      data.push(current);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return data;
  }
}

var bst = new BinarySearchTree();
