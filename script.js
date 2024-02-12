class Node {
  constructor(name, number) {
    this.name = name;
    this.number = number
    this.next = null;
    this.prev = null;
  }
  toString() {
    return this.name +
      "\n " + this.number +
      "\n Target: " + (this.next ? this.next.name : "null") +
      "\n Hunter: " + (this.prev ? this.prev.name : "null");
  }
}

/* test commands worked
node class works as intended 
*/

class DoublyList {

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    }
    else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  getSize() {
    let string = "Size: "
    string += this.size;
    return string;
  }

  remove(name) {
    let current = this.head;
    while (current !== null) {
      if (current.name === name) {
        if (current === this.head) {
          this.head = current.next;
          break
        }
        if (current.next === null) {
          current.prev.next = null;
          this.tail = current;
        }
        else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
      }
      current = current.next
    }
    this.size--;
  }


  toString() {
    let display = "";
    let current = this.head;
    while (current !== null) {
      display += current.name;
      if (current.next !== null) {
        display += " --> ";
      }
      current = current.next;
    }
    return display;
  }

  getInfo(name) {
    let current = this.head;
    while (current !== null) {
      if (current.name === name) {
        return current.toString();
      }
      current = current.next
    }
  }
}

// thru debugging i have figured out getSize, remove, append, and toString, all serve their purpose 

