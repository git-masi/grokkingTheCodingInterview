import { LinkedList } from '../utils/linked-list.mjs';

const list = new LinkedList();

list.insert(1);
list.insert(2);
list.insert(3);
const cycleStart = list.tail;
list.insert(5);
list.insert(8);
list.insert(13);

list.tail.next = cycleStart;

const list2 = new LinkedList();

list2.insert(1);
list2.insert(2);
list2.insert(3);

console.log(hasCycle(list));
console.log(hasCycle(list2));

function hasCycle(list) {
  let fast = list.head;
  let slow = list.head;

  while (fast !== null) {
    fast = fast.next;

    if (fast) {
      fast = fast.next;
    } else {
      return false;
    }

    slow = slow.next;

    if (fast === slow) {
      return true;
    }
  }

  return false;
}
