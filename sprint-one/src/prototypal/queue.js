var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.next = 0;
  newQueue.oldest = 0;
  newQueue.storage = {};

  return newQueue;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.next - this.oldest;
};

queueMethods.enqueue = function(value) {
  this.storage[this.next] = value;
  this.next++;
};

queueMethods.dequeue = function() {
  if (this.oldest < this.next) {
    var result = this.storage[this.oldest];
    delete this.storage[this.oldest];
    this.oldest++;
    return result;
  }
};

