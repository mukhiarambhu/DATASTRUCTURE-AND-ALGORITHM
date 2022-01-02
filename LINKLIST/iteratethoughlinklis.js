//create a node class

class Node {
  constructor(val) {
    this.val = val; //it is value of current node
    this.next = null; //it is reference to next node
  }
}

//creating new node
let a = new Node("A");
let b = new Node("B");
let c = new Node("C");
let d = new Node("D");

//setting next line of node
a.next = b;
b.next = c;
c.next = d;

function printLinklist(head) {
  let arr = "";
  let current = head;
  while (current != null) {
    arr += current.val + " ";
    current = current.next;
  }
  console.log(arr);
}

printLinklist(a);

//recursilvly iterate through an array

let printLinklistRecursively = (head) => {
  let res = "";
  fillvalue(head, res);
};

function fillvalue(head, res) {
  if (head == null) {
    console.log(res);
    return;
  }

  res += head.val + " ";
  fillvalue(head.next, res);
}

printLinklistRecursively(a);
