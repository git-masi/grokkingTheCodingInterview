import { LinkedList } from '../utils/linked-list.mjs';
import { cycleLength } from './length-of-cycle.mjs';

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

console.log(startOfCycle(list));
console.log(startOfCycle(list2));

function startOfCycle(list) {
  let offset = list.head;
  let head = list.head;
  let len = cycleLength(list);

  if (len === 0) {
    return null;
  }

  let count = 0;

  while (count < len) {
    offset = offset.next;
    count++;
  }

  while (head !== offset) {
    head = head.next;
    offset = offset.next;
  }

  return offset;
}
