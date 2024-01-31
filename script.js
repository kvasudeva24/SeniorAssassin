class Node{
  constructor(name, number){
    this.name = name;
    this.number = number
    this.next = null;
    this.prev = null;
  }
  toString(){
    return this.name + 
    "\n " + this.number+ 
    "\n Target: " + this.next +
    "\n Hunter: " + this.prev;
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(node){
    if(this.head == null){
      this.head = node;
    }
    else{
      let current = this.head;
      while(current.next != null){
        current = current.next;
      }
      this.tail = node;
      current.next = node;
      node.prev = current;
      node.next = this.head;
      this.head.prev = this.tail;
    }
    this.length++;
  }

  removeByName(name){
    if(this.head.name == name){
      this.head = this.head.next;
      this.head.prev = this.tail;
      this.tail.next = this.head;
    }
    else if(this.tail.name == name){
      this.tail.prev = this.tail;
      this.tail.next = this.head;
      this.head.prev = this.tail;
    }
    else{
      let current = this.head;
      while(current.next.name != name){
        current = current.next;
      }
      current.next = current.next.next;
      current.next.prev = current;
    }
    this.length--;
  }

  toString(){
    let current = this.head;
    let string = this.head.name + " --> ";
    while(current.next != this.head){
      string += current.name + " --> ";
      current = current.next;
    }
    return string;
  }
  
}

const game = new DoublyLinkedList();
const x = new Node("X", 1);
const y = new Node("Y", 2);
const z = new Node("Z", 3);
game.append(x);
game.append(y);
game.append(z);
console.log(game.toString());
