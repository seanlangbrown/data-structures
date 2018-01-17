var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.count = 0;
  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.count += 1;
    this.storage[this.count] = value;
  },

  pop: function() {
    var val = this.storage[this.count];
    delete this.storage[this.count];
    this.count -= 1;
    return val;
  },

  size: function() {
    if(this.count < 0){
      return 0;
    }
    return this.count;
  }

};


