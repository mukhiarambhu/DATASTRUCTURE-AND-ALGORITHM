class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let a = new Node(2);
let b = new Node(8);
let c = new Node(7);
let d = new Node(3);

a.next = b;
b.next = c;
c.next = d;

function addlinklist(head) {
  let sum = 0;
  let current = head;
  while (current != null) {
    sum += current.val;
    current = current.next;
  }
  console.log(sum);
}

addlinklist(a);

function sumlinklist(head) {
  let sum = 0;

  recursiveSum(head, sum);
}

function recursiveSum(head, sum) {
  if (head == null) {
    console.log(sum);
    return;
  }
  sum += head.val;
  recursiveSum(head.next, sum);
}
sumlinklist(a);
