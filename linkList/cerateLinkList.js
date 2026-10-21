class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

function createList() {
  const p3 = new Node(3, null);
  const p2 = new Node(2, p3); // 2->3->null;
  const p1 = new Node(1, p2); //1->2->3
  return p1;
}
function insert(head, p, value) {
  const node = new Node(value, null);
  if (p <= 0) {
    //5 1->2->3
    node.next = head;
    head = node; //-1->1->2->3
    return head;
  }
  let temp = head;

  for (let i = 0; i < p - 1 && temp.next != null; i++) {
    temp = temp.next;
  }
  node.next = temp.next;
  temp.next = node;

  return head;
}

function remove(head, value) {
  if(head == null) return head;
  let temp = head;
  let prev = null;
  while (temp != null) {
    if (temp.data == value) {
      if (prev == null) {
        //100 100 1 2 3 3 3
        head = temp.next;
        temp = temp.next
      } else {
        prev.next = temp.next;
        temp = temp.next;
      }
    } else {
     
      prev = temp;
      temp = temp.next;
    }
  }

  // node.next = temp.next;
  // temp.next = node;

  return head;
}

function printList(head) {
  let temp = head;
  while (temp != null) {
    console.log(temp.data);
    temp = temp.next;
  }
}

console.log("create list");
let head = createList();
console.log("print list");
printList(head);
console.log("print list after insert at 0 value -1");

head = insert(head, 0, -1);
head = insert(head, 1, -1);
printList(head);
head = insert(head, 2, 66);

printList(head);

head = insert(head, 100, 100);
head = insert(head, 100, 100);


printList(head);
console.log("remove 100");
head = remove(head, 100);
head = remove(head, 66);
head = remove(head, -1);

printList(head);
