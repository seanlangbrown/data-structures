//testing branch

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //create new node
    var newNode = Node(value);
    //if there is no head
    if (!this.head) {
      //point head and tail to new node
      this.head = newNode;
      this.tail = newNode;
    }
    //if there is a head
    //point current tail node to new node
    this.tail.next = newNode;
    //point tail to new node
    this.tail = newNode;
      
  };

  list.removeHead = function() {
    var val = this.head.value;
    this.head = this.head.next;
    return val;
  };

  list.contains = function(target) {
    //first input=this.head
    var nodeSearcher = function(node) {
      //check if value = target
      if (node.value === target) {
        return true;
      } else if (!node.next) {
        return false;
      } else { 
        return nodeSearcher(node.next);
      }
      //if true, return true
      //else if nextNode is null, return false
      //else, call self on nextnode
    };
    
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
