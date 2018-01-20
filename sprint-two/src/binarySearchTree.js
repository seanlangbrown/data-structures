var BinarySearchTree = function(value) {
 
  this.left = null;
  this.right = null;
  this.value = value;

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
    if (!this.left) {
      this.left = newNode;
    } else {
      this.left.insert(value);
    }
  } else {
    //if the new value is greater than the current node value, go to the right
    //do same stuff but to the right child
    if (!this.right) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
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
    if (this.left) {
      //if LC exists return call contains on left child
      return this.left.contains(value);
    }
  } else {
    //if false: check for right child
    if (this.right) {
      // if RC exists return call contains on right child
      return this.right.contains(value);
    }
  }

  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  //search through all nodes - depth first (left child first) and pass value into the callback function
  //call the callback, pass in value
  cb(this.value);

  //call depthFirstLog on left child
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  //call depthFirstLog on right child
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};


BinarySearchTree.prototype.breadthFirstLog = function(cb, nodes) {
  //search through all nodes - breadth first (left child first) and pass value into the callback function
  //call the callback, pass in value
  
  //base case, top node, no array passed in
  //recursive case, nodes are all the nodes at one level
  nodes = nodes || [this];
  
  var nextNodes = []; //to store the children in the next level
  //for each element in the input array
  for (var i = 0; i < nodes.length; i++) {
    //call cb on the nodes,
    cb(nodes[i].value);
    //push left child, then right child to next Nodes
    if (nodes[i].left) {
      nextNodes.push(nodes[i].left);
    }
    if (nodes[i].right) {
      nextNodes.push(nodes[i].right);
    }
  }

  //call recursively on array of all children
  if (nextNodes.length) {
    this.breadthFirstLog(cb, nextNodes);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
   insert and contains are log linear (log(n))
   depthFirstLog and breadthFirstLog are linear
 */
