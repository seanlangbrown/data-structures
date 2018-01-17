var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var order = [];
  var pos = 0;

  // Implement the methods below
  someInstance.enqueue = function(value) {
    count += 1;
    pos += 1;
    storage[pos] = value;
    order.push(pos);

  };

  someInstance.dequeue = function() {
    var val = storage[order[0]];
    delete storage[order[0]];
    order.shift();
    count -= 1;
    return val;
  };

  someInstance.size = function() {
    if(count < 0){
      return 0;
    }
    return count;
  };

  return someInstance;
};

