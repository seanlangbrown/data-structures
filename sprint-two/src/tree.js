var Tree = function(value) {
  var newTree = Object.create(treeMethods);//{};
  newTree.value = value;
  //_.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //create a new tree with value and push to the array of children
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  //input: the node that contains is called on (this)
  //if this nodes value is the target, return true
  if (this.value === target) {
    return true;
  } else if (!this.children.length) {
    //if this node has no children
    return false;
  } else {
    //if this node has children
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        //if found in any child, stop search and return true
        return true;
      }
    }
    return false;
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
