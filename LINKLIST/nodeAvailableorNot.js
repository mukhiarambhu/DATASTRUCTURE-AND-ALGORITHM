class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let a = new Node(5);
let b = new Node(8);
let c = new Node(9);
let d = new Node(15);

a.next = b;
b.next = c;
c.next = d;

let target = 1;
function findTarget(head, target) {
  let current = head;
  while (current != null) {
    if (current.val == target) {
      console.log("Present");
      return;
    }
    current = current.next;
  }
  console.log("Not present");
}

findTarget(a, target);

//recursive

function find(head, target) {
  if (head == null) {
    console.log("Not present");
    return;
  } else if (head.val == target) {
    console.log("Present");
    return;
  }

  find(head.next, target);
}

find(a, target);
