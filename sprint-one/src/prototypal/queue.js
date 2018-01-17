var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.count = 0;
  someInstance.storage = {};
  someInstance.order = [];
  someInstance.pos = 0;

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


