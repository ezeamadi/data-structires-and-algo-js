class MaxBinaryHeap {
  constructor() {
    this.value = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp(val);
  }

  bubbleUp() {
    let id = this.values.length - 1;
    const node = this.values[id];

    while (id > 0) {
      let parentId = Math.floor((id - 1) / 2);
      let parent = this.values[parentId];

      if (node <= parent) break;
      this.values[parentId] = node;
      this.values[id] = parent;
      id = parentId;
    }
  }

  extractMax() {
    // remove the root which is the maximum in a heap
    const max = this.value[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.trickleDown();
    }

    return max;
  }

  // trickle down
  trickleDown() {
    let id = 0;
    const length = this.values.length;
    const node = this.values[0];

    while (true) {
      let leftChildId = 2 * id + 1;
      let rightChildId = 2 * id + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildId < length) {
        leftChild = this.values[leftChildId];

        if (leftChild > node) swap = leftChildId;
      }

      if (rightChildId < length) {
        rightChild = this.values[rightChildId];
        if (
          (swap === null && rightChild > node) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildId;
        }
      }

      if (swap === null) break;
      this.values[id] = this.values[swap];
      this.values[swap] = element;
      id = swap;
    }
  }
}
