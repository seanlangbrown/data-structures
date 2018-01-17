class Queue {
  constructor(){
  	this.count = 0;
    this.storage = {};
    this.order = [];
    this.pos = 0;
  }

  enqueue(value) {
    this.count += 1;
    this.pos += 1;
    this.storage[this.pos] = value;
    this.order.push(this.pos);
  }

  dequeue() {
    var val = this.storage[this.order[0]];
    delete this.storage[this.order[0]];
    this.order.shift();
    this.count -= 1;
    return val
  }

  size() {
    if(this.count < 0){
      return 0;
    }
    return this.count;
  }
  
}



