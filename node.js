// Creates a node containing the data and a reference to the next item
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

// create the constructor for the stack with a empty first node
class Stack {
    constructor() {
        this.top = null;
    }
