

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //adding property for counting size
  //this.length = 0;
};

//To prevent changes in the function from changes higher up in the prototype chain
HashTable.prototype.getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

HashTable.prototype.insert = function(k, v) {
  var index = this.getIndexBelowMaxForKey(k, this._limit);

  //get what is in existing storage at index
  //put key value into a tuple array
  var bucket = this._storage.get(index);
  var tuple = [k, v];
  //if storage[index] = undefined
  if (bucket === undefined) {
    //put tuple array into bucket array
    bucket = [tuple];
  } else {
    //push tuple array to end of existing bucket array
    bucket.push(tuple);
  }
  //set bucket array into storage[index]
  this._storage.set(index, bucket);



  //and use set function and pass in index and v
  //this._storage.set(index, v);
  //this.length++;
  //this.increaseLimit();


  //check if need to increase limit
};

HashTable.prototype.retrieve = function(k) {
  var index = this.getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = this.getIndexBelowMaxForKey(k, this._limit);
  //delete the storage element at the index
  //can't access storage array because it is in a closure
  this._storage.each(function(value, i, storage) {
    delete storage[index];
  });
  //this.length--;
};

//create new prototype function that doubles _limit when the storage size = _limit
// HashTable.prototype.increaseLimit = function() {
//   console.log(this.length);
//   if (this.length === this._limit-1) {
//     console.log(this.length);
//     this._limit = this._limit * 2;
//   }
// };

/*
 * Complexity: What is the time complexity of the above functions?
 */


