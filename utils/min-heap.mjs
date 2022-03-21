export class MinHeap {
  constructor() {
    this.vals = [];
  }

  insert(val) {
    this.vals.push(val);
    let currIdx = this.vals.length - 1;
    this._bubbleUp(currIdx);
  }

  extractMin() {
    if (this.vals.length === 0) return null;

    this._swap(this.vals, 0, this.vals.length - 1);

    const min = this.vals.pop();

    this._sinkDown();

    return min;
  }

  _swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }

  _getParentIndex(idx) {
    return Math.floor((idx - 1) / 2);
  }

  _getLeftChildIndex(parentIdx) {
    return parentIdx * 2 + 1;
  }

  _getRightChildIndex(parentIdx) {
    return parentIdx * 2 + 2;
  }

  _bubbleUp(currIdx) {
    let parentIdx = this._getParentIndex(currIdx);

    while (parentIdx >= 0 && this.vals[parentIdx] > this.vals[currIdx]) {
      this._swap(this.vals, parentIdx, currIdx);
      currIdx = parentIdx;
      parentIdx = this._getParentIndex(currIdx);
    }
  }

  _sinkDown() {
    let currIdx = 0;
    let lChildIdx, rChildIdx, currVal, lVal, rVal;

    const setValues = () => {
      lChildIdx = this._getLeftChildIndex(currIdx);
      rChildIdx = this._getRightChildIndex(currIdx);

      currVal = this.vals[currIdx];
      lVal = this.vals[lChildIdx] ?? Infinity;
      rVal = this.vals[rChildIdx] ?? Infinity;
    };

    setValues();

    while (currVal > lVal || currVal > rVal) {
      if (lVal < rVal) {
        this._swap(this.vals, currIdx, lChildIdx);
        currIdx = lChildIdx;
      } else {
        this._swap(this.vals, currIdx, rChildIdx);
        currIdx = rChildIdx;
      }

      setValues();
    }
  }
}
