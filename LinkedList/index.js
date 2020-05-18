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
  insertAt(index, item) {
    if (index > -1 && index <= this.size) {
      let newNode = new node(item);
      let current = this.head;
      if (index === 0) {
        newNode.next = current;
        this.head = newNode;
      } else {
        let previous = null;
        //從頭開始找到要insert的Index
        let listIdx = 0;
        while (listIdx != index) {
          listIdx++;
          previous = current;
          current = current.next;
        }
        newNode.next = current;
        previous.next = newNode;
        this.size++;
        return true;
      }
    } else {
      return false;
    }
  }
  removeAt(index) {
    let current = this.head;
    if (index > -1 && index < this.size) {
      if (index === 0) {
        this.head = this.head.next;
      } else {
        let previous;
        let listIdx = 0;
        while (listIdx != index) {
          listIdx++;
          previous = current;
          current = current.next;
        }
        //找到要刪除的index, 把上一個next指向現在的next
        previous.next = current.next;
        this.size--;
        return current.item;
      }
    } else {
      return false; //無法執行
    }
  }
  indexOf(item) {
    let listIdx = 0;
    let current = this.head;
    while (current) {
      if (current.item === item) {
        return listIdx;
      }
      current = current.next;
      listIdx++;
    }
    return -1;
  }
  removeItem(item) {
    const removeIndex = this.indexOf(item);
    return this.removeAt(removeIndex);
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
List.insertAt(1, 6);
List.removeAt(1);

// console.log(List.indexOf(0));
console.log(List.indexOf(0));
console.log(List.removeItem(2));

console.log(List);
