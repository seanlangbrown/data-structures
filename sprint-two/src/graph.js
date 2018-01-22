//nodes: { node: {neighbors key: true, n:true}, 
//               {node: neighbors key: true, n:true }
//       }

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
//inserts a node in nodes as node: {}
  this.nodes[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //check if node is in nodes{}
  if (this.nodes[node]) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //remove edges between thisnode and its edges
  for (var edges in this.nodes[node]) {
    this.removeEdge(edges, node);
  }
  
  //remove the node from nodes
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //if toNode is in fromNode, return true;
  if (this.nodes[fromNode][toNode]) {
    return true; 
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //add toNode to fromNode
  this.nodes[fromNode][toNode] = true;
  //add fromNode to toNode
  this.nodes[toNode][fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //delete toNode edge from fromNode
  delete this.nodes[fromNode][toNode];
  //delete fromNode edge from toNode
  delete this.nodes[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, function(value, key) {
    cb.call(this, key);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
RemoveNode and forEachNode are linear
The rest are all constant
 */
