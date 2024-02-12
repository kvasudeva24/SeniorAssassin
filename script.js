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
      "\n Target: " + this.next +
      "\n Hunter: " + this.prev;
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


const p1 = new Node("Kartik", 8477369877);
const p2 = new Node("Anthony", 12345677);
const p3 = new Node("Kai", 98585858);
const p4 = new Node("Skurra", 5757558585);

/* thru debugging i have figured out getSize, remove, append, and toString, all serve their purpose
but when I wanna look at p1 after initializing the list it throws me a 
"Maximum call stack size exceeded error" but i do not understand how to fix or why */

console.log(p1.toString());



const game = new DoublyList();
game.append(p1);
game.append(p2);
game.append(p3);
game.append(p4);

/* if i wanna call line 104 here it throws me an error */


