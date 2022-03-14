console.log(compare('xy#z', 'xzz#'));
console.log(compare('xy#z', 'xyz#'));
console.log(compare('xp#', 'xyz##'));

function compare(s1, s2) {
  let end1 = s1.length - 1;
  let end2 = s2.length - 1;

  while (end1 >= 0 && end2 >= 0) {
    let c1 = s1[end1];
    let c2 = s2[end2];
    let b1 = 0;
    let b2 = 0;

    while (c1 === '#') {
      b1++;
      end1--;
      c1 = s1[end1];
    }

    while (c2 === '#') {
      b2++;
      end2--;
      c2 = s2[end2];
    }

    if (b1 !== 0) {
      end1 -= b1;
      c1 = s1[end1];
    }

    if (b2 !== 0) {
      end2 -= b2;
      c2 = s2[end2];
    }

    if (c1 !== c2) {
      return false;
    }

    end1--;
    end2--;
  }

  return end1 >= 0 || end2 >= 0 ? false : true;
}
