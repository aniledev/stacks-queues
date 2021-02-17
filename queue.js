// Creates a node containing the data and a reference to the next item
class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// creates an empty queue with values for the beginning and the end of the queue
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    // create a new data node
    const node = new _Node(data);

    // if the queue is empty, the new node is the first node
    if (this.first === null) {
      this.first = node;
    }

    // if the queue is not empty, then the last node should point to the new node
    if (this.last) {
      this.last.next = node;
    }

    //make the new node the last item on the queue
    this.last = node;
  }

  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }

    // the first node is not the next node
    const node = this.first;
    this.first = this.first.next;

    // if there is only one item in the queue, once it's removed the queue is null
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}
