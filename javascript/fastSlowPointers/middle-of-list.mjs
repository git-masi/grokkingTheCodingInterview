import { LinkedList } from '../utils/linked-list.mjs';

const list = new LinkedList();

list.insert(1);
list.insert(2);
list.insert(3);

console.log(middle(list));

const list2 = new LinkedList();

list2.insert(1);

console.log(middle(list2));

const list3 = new LinkedList();

list3.insert(1);
list3.insert(2);

console.log(middle(list3));

function middle(list) {
  let fast = list.head;
  let slow = list.head;
  let size = 1;
  let curr = 1;
  let mid = null;

  while (fast) {
    fast = fast.next;

    if (!fast) {
      mid = Math.ceil(size / 2);
      break;
    } else {
      size++;
    }

    fast = fast.next;

    if (!fast) {
      mid = Math.ceil(size / 2) + (size % 2 === 0 ? 1 : 0);
      break;
    } else {
      size++;
    }
  }

  while (curr !== mid) {
    slow = slow.next;
    curr++;
  }

  return slow;
}
