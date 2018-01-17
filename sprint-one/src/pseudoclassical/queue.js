var Queue = function() {
  this.count = 0;
  this.storage = {};
  this.order = [];
  this.pos = 0;
};

Queue.prototype.enqueue = function(value) {
  this.count += 1;
  this.pos += 1;
  this.storage[this.pos] = value;
  this.order.push(this.pos);

};

Queue.prototype.dequeue = function() {
  var val = this.storage[this.order[0]];
  delete this.storage[this.order[0]];
  this.order.shift();
  this.count -= 1;
  return val
};

Queue.prototype.size = function() {
  if(this.count < 0){
    return 0;
  }
  return this.count;
};



