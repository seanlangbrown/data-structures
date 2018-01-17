var Stack = function() {
  this.count = 0;
  this.storage = {};

};

Stack.prototype.push = function(value) {
  this.count += 1;
  this.storage[this.count] = value;
};

Stack.prototype.pop = function() {
    var val = this.storage[this.count];
    delete this.storage[this.count];
    this.count -= 1;
    return val;
};

Stack.prototype.size= function() {
  if(this.count < 0){
    return 0
  }
  return this.count;
};
