var BinarySearchTree = function(value) {
 
  this.left;
  this.right;
  this.value = value;

};

BinarySearchTree.prototype.checkAndAdd = function(direction, value) {
  console.log('checkAndAdd');
  //check if there is a left child
  if (this[direction] === undefined) {
    //if no child, append as left child
    this[direction] = new BinarySearchTree(value);
    console.log(this[direction].value);

  } else {
    //call insert on left child
    this[direction].insert(value);
  }
};
BinarySearchTree.prototype.insert = function(value) {
  var newNode = new BinarySearchTree(value);
  //find a place in the tree to append the new value

  //helper function


  if (value < this.value) {
    //if the new value is less than the current node value, go to the left
    //check if there is a left child
    //if no child, append as left child
    //call insert on left child
    this.checkAndAdd('left', value);
    console.log(this.left);
  } else {
    //if the new value is greater than the current node value, go to the right
    //do same stuff but to the right child
    this.checkAndAdd('right', value);
  }

};

BinarySearchTree.prototype.contains = function(value) {
  //Goal: check to see if value exists in the tree
  //return a boolean true if value is found
  
  //check if current node === value
  if (this.value === value) {
    //if true, return
    return true;
  }
  //if false:
  //check if value < current node 
  if (value < this.value) {
    //if true: check for left child
    if (this.left !== undefined) {
      //if LC exists return call contains on left child
      return this.left.contains(value);
    }
  } else {
    //if false: check for right child
    if (this.right !== undefined) {
      // if RC exists return call contains on right child
      return this.right.contains(value);
    }
  }

  return false;
};

BinarySearchTree.prototype.depthFirstLog = function() {

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
