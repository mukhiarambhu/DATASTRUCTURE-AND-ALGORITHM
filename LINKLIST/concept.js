class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class linkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //insert head
  insertHead(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //print data
  printData() {
    let result = "";
    let current = this.head;
    while (current != null) {
      result += current.data + " ";
      current = current.next;
    }
    return console.log(result);
  }

  //insert last
  insertLast(data) {
    let node = new Node(data);
    let current = this.head;
    //if list is empty insert as head
    if (!current) {
      this.head = node;
    } else {
      while (current.next != null) {
        //until curerent.next exist means current.next is not null
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  //get size
  getSize() {
    return console.log(this.size);
  }

  //insert at index

  insertAtIndex(data, index) {
    //if given index is out of range
    if (index > 0 && index > this.size) {
      return;
    }
    //if index value is first i.e.0
    if (index === 0) {
      this.insertHead(data);
      return;
    }

    let node = new Node(data);
    let current, previous;

    //set current
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current; //node before index
      count++;
      current = current.next; //node after index
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }

  //get at index

  getAtIndex(index) {
    let count = 0;
    let current = this.head;
    while (count < index) {
      current = current.next;
      count++;
    }
    return console.log(current.data);
  }

  //remove at an index

  remove(index) {
    //if index is out of range

    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }
  //clear linklist

  clearlist() {
    this.head = null;
    this.size = 0;
    return console.log("empty linklist add node");
  }
}

let linklist1 = new linkList();
linklist1.insertHead(10);
linklist1.insertHead(100);
linklist1.insertHead(2000);
linklist1.insertLast(100);
linklist1.insertLast(200);
linklist1.insertAtIndex(25, 0);
linklist1.insertAtIndex(250, 5);
linklist1.printData();
linklist1.getSize();
linklist1.remove(0);
linklist1.getSize();
linklist1.printData();
linklist1.clearlist();
