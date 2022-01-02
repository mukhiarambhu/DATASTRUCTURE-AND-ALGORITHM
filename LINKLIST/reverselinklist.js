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

function reverse(head) {
  current = head;
  let prev = null;
  while (current != null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  console.log(prev);
}

// reverse(a);

//recursively

function reverseLinklist(head, prev) {
  if (head == null) return prev;
  const next = head.next;
  head.next = prev;
  return reverseLinklist(next, head);
}

console.log(reverseLinklist(a, (prev = null)));
