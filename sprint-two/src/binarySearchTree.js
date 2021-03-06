var BinarySearchTree = function(value) { //to implement depth, add parameter depth
 
  this.left = null;
  this.right = null;
  this.value = value;
  /*To implement balancing:
  //depth property = depth || 0;
  //node index - increments each time a node is instantiated
  */
};


BinarySearchTree.prototype.insert = function(value) {
  var newNode = new BinarySearchTree(value); //add argument for depth , this.depth + 1
  //find a place in the tree to append the new value


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
  /*to implement balancing:
  //check if tree is balanced, if not, balance it
  */
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

BinarySearchTree.prototype.isBalanced = function() {
  /*
    //check if tree is balance by comparing min and max depth
      //calculate min depth from # of nodes
      //calcualte max depth from current node
    
    //if max depth is more than 2x min depth
    //return false
  */
};

BinarySearchTree.prototype.rebalance = function() {
  /*
    //rebalance tree:
      //traverse through tree to get sorted array of nodes
      //create new balanced tree
        //get the middle node, split remaining elements into left array and right array
        //add middle element to tree
        //^repeat on both left and right array until all elements are added
      //point old reference to tree to the new tree
  */
};

/*
 * Complexity: What is the time complexity of the above functions?
   insert and contains are log linear (log(n))
   depthFirstLog and breadthFirstLog are linear
 */
