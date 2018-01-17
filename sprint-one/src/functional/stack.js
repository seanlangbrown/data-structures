var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  
  // Implement the methods below
  someInstance.push = function(value) {
    count += 1;
    storage[count] = value;
  };

  someInstance.pop = function() {
    var val = storage[count];
    delete storage[count];
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



