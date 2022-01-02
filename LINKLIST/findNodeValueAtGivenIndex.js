class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let a = new Node(4);
let b = new Node(8);
let c = new Node(14);
let d = new Node(22);

a.next = b;
b.next = c;
c.next = d;

let index = 2;

function valueAtIndex(head, index) {
  let current = head;
  let count = 0;
  while (current != null) {
    if (count == index) {
      console.log(current.value);
      return;
    }
    count++;
    current = current.next;
  }
}

valueAtIndex(a, index);

//recursively
let count = 0;
function valueAtNode(head, index, count) {
  if (head == null) {
    return;
  }
  if (count == index) {
    console.log(head.value);
    return;
  }

  valueAtIndex(head.next, index, count++);
}

valueAtIndex(a, index, count);
