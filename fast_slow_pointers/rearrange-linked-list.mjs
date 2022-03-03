import { LinkedList } from '../utils/linked-list.mjs';

const list = new LinkedList();

list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);

arrangeList(list);

list.iterate(console.log);

// doesn't work
function arrangeList(list) {
  let start = list.head;
  let end = null;
  let count = 1;

  while (start.next) {
    start = start.next;
    count++;
    if (start.next) {
      start = start.next;
      count++;
    } else {
      end = start;
    }
  }

  let mid = null;
  start = list.head;

  for (let i = 0; i < Math.ceil(count / 2); i++) {
    start = start.next;
  }

  mid = start;

  while (start.next) {
    const temp = start.next;
    start.next.next = start;
    start = temp;
  }

  mid.next = null;
  start = list.head;

  while (start.next) {
    const temp1 = start.next;
    const temp2 = end.next;
    start.next = end;
    end.next = temp1;
    end = temp2;
    start = start.next;

    if (start) {
      start = start.next;
    } else {
      break;
    }
  }
}
