var Tree = function(value) {
  var newTree = Object.create(treeMethods);//{};
  newTree.value = value;
  //_.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];

  //add parent property
  newTree.parent = null;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //create a new tree with value and push to the array of children
  var newNode = Tree(value);
  newNode.parent = this;
  this.children.push(newNode);
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

treeMethods.removeFromParent = function() {
//remove child reference to this node from parent
  var siblings = this.parent.children; //an Array
  var i = 0;
  var notFound = true;
  while (notFound && i < siblings.length) {
    if (siblings[i] === this) {
      notfound = false;
    }
    i++;
  }
  siblings.splice(i - 1, 1);

  //set .parent to null
  this.parent = null;

  return this;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
