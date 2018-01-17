var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {
  	count: 0,
  	storage: {},
  	order: [],
  	pos: 0

  };

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {

  enqueue: function(value) {
    this.count += 1;
    this.pos += 1;
    this.storage[this.pos] = value;
    this.order.push(this.pos);

  },

  dequeue: function() {
    var val = this.storage[this.order[0]];
    delete this.storage[this.order[0]];
    this.order.shift();
    this.count -= 1;
    return val
  },

  size: function() {
    if(this.count < 0){
      return 0;
    }
    return this.count;
  }

};


