export class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = this.head;
    this.size = !head ? 0 : 1; // Only used for guards against infinite loops
  }

  insert(data) {
    const newNode = new ListNode(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  // Figure out how to implement this
  // *[Symbol.iterator]() {
  //   yield* this.nodes;
  // }

  // Don't call this if you have a cycle!
  iterate(fn) {
    let node = this.head;
    let count = 0;

    while (node !== null && count < this.size) {
      if (fn instanceof Function) fn(node);
      node = node.next;
      count++;
    }
  }
}
