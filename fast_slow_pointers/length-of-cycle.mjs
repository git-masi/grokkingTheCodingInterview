import { LinkedList } from '../utils/linked-list.mjs';

const list = new LinkedList();

list.insert(1);
list.insert(2);
list.insert(3);

const cycleStart = list.tail;

list.insert(4);
list.insert(5);
list.insert(6);

list.tail.next = cycleStart;

const list2 = new LinkedList();

list2.insert(1);
list2.insert(1);
list2.insert(2);
list2.insert(3);
list2.insert(5);
list2.insert(8);

console.log(cycleLength(list));
console.log(cycleLength(list2));

function cycleLength(list) {
  let fast = list.head;
  let slow = fast;
  let anchor = null;

  while (fast) {
    fast = fast.next;

    if (!fast) {
      return 0;
    }

    fast = fast.next;

    if (!fast) {
      return 0;
    }

    slow = slow.next;

    if (fast === slow) {
      anchor = fast;
      break;
    }
  }

  let length = 1;
  slow = anchor.next;

  while (slow !== anchor) {
    length++;
    slow = slow.next;
  }

  return length;
}
