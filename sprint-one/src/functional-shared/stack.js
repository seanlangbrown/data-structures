var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  someInstance.count = 0;
  someInstance.storage = {};

  _.extend(someInstance, stackMethods);

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


