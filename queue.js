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

    enqueue (data) {
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
}
