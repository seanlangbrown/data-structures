var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.next = 0;
  someInstance.oldest = 0;
  someInstance.storage = {};

  _.extend(someInstance, queueMethods); 

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.next] = value;
    this.next++;
  },

  dequeue: function() {
    if(this.oldest < this.next) {
      var result = this.storage[this.oldest];
      delete this.storage[this.oldest];
      this.oldest++;
      return result;
    }
  },

  size: function () {
    return this.next - this.oldest;
  }
};

