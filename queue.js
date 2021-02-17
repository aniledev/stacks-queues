// Creates a node containing the data and a reference to the next item
class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// creates an empty queue 
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }