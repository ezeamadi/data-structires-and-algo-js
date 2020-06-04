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
}
