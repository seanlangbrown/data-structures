class Stack {
  constructor() {
  	this.count = 0;
    this.storage = {};
  }

  push(value) {
    this.count += 1;
    this.storage[this.count] = value;
  }

  pop() {
    var val = this.storage[this.count];
    delete this.storage[this.count];
    this.count -= 1;
    return val;
  }

  size() {
    if(this.count < 0){
      return 0
    }
    return this.count;
  }
}

