class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  append(item) {
    let newNode = new node(item);

    if (!this.head) {
      this.head = newNode;
    } else {
      let tail = this.head;
      while (tail.next !== null) {
        tail = tail.next;
      }
      tail.next = newNode;
    }

    this.size++;
  }
}

class node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

const List = new LinkedList();
List.append(1);
List.append(2);
List.append(3);
console.log(List);
