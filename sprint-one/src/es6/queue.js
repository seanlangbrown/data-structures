class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.next = 0;
    this.oldest =0;
    this.storage = {};
  }

  size() {
    return this.next - this.oldest;
  }

  dequeue() {
    if (this.oldest < this.next) {
      var result = this.storage[this.oldest];
      delete this.storage[this.oldest];
      this.oldest++;
      return result;
    }
  }

  enqueue(value) {
    this.storage[this.next] = value;
    this.next++;
  }

}
