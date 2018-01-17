var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var last = 0
  var next = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[last] = value;
    last++;
  };

  someInstance.dequeue = function() {
    if(last > next) {
      var result = storage[next];
      delete storage[next]; //memory management
      next++;
      return result;
    }
  };

  someInstance.size = function() {
    return last - next;
  };

  return someInstance;
};
