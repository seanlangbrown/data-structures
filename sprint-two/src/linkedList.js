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
    var nodeSearcher = function(node) {
      //check if value = target
      if (node.value === target) {
        //if true, return true
        return true;
      } else if (!node.next) {
        //else if nextNode is null, return false
        return false;
      } else { 
        //else, call self on nextnode
        return nodeSearcher(node.next);
      }
    };

    //first input=this.head
    return nodeSearcher(this.head);
    
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
   The time complexities of removeHead and addToTail are constant.  The time complexity of contains is linear.
 */
