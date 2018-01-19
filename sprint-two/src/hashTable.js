

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //adding property for counting size
  //this.length = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //call changeSize function

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
    //check if key already exists in bucket and return index
    var foundIndex = 0;
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        break;
      }
      foundIndex++;
    }
    bucket[foundIndex] = tuple;
  }
  //set bucket array into storage[index]
  this._storage.set(index, bucket);
  //this.length++;

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //get bucket at index
  var bucket = this._storage.get(index);
  //if undefined, return undefined
  if (bucket !== undefined) {
    //else iterate throught tuples in bucket to find key and return value
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //get the bucket
  var bucket = this._storage.get(index) || [];
  //iterate through tuples in bucket to find key and delete
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
      //this.length--;
      break;
    }
  }

};


//changeSize function
//check the size for the ratio 25%-75%
//if the size is ok, return
//else pick a new size (check if need to double/half)
//create a new LimitedList with new limit
//copy contents of storage to the new LL
//iterate through original list
//iterate through each bucket to get all tuples
//call newList.insert on each tuple from old list
//point this.storage to newList


/*
 * Complexity: What is the time complexity of the above functions?
 */


