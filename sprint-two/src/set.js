var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = true;
};

setPrototype.contains = function(item) {
  //return true if storage has key
  return !!(this._storage[item]);
};

setPrototype.remove = function(item) {
  //if key exists in storage, delete key
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
Above functions are all constant time
 */
