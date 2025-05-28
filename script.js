class Node {
  constructor(name, number) {
    this.name = name;
    this.number = number
    this.next = null;
    this.prev = null;
    this.elims = 0;
  }
  toString() {
    return this.name +
      "\n " + this.number +
      "\n Target: " + (this.next ? this.next.name : "null") +
      "\n Hunter: " + (this.prev ? this.prev.name : "null") +
      "\n Elims: " + this.elims;
  }
}


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
    return this.size;
  }

  remove(name) {
    let current = this.head;
    while (current !== null) {
      if (current.name === name) {
        if (current === this.head) {
          this.head = current.next;
          this.tail.elims++;
          this.head.prev = this.tail;
          this.size--;

          break
        }
        if (current.next === null) {
          current.prev.next = null;
          current.prev.elims++;
          this.tail = current.prev;
          this.size--;
          break
        }
        else {
          current.prev.elims++;
          current.prev.next = current.next;
          current.next.prev = current.prev;
          this.size--;

        }
      }
      current = current.next
    }
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

  findMostKills(){
    let list = [];
    let current = this.head;
    let max = current.elims;
    while(current!== null){
      if(current.elims > max){
        max = current.elims
      }
      current = current.next;
    }
    let cycle = this.head;
    while(cycle!==null){
      if(cycle.elims === max){
        list.push(cycle.name);
      }
      cycle = cycle.next;
    }
    let string = "";
    for(let i = 0; i<list.length; i++){
      string= string + list[i] +", ";
    }
    string+=" all have " + max + " kills";
    return string;
  }

  findLeastKills(){
    let list = [];
    let current = this.head;
    let min = current.elims;
    while(current!== null){
      if(current.elims < min){
        max = current.elims
      }
      current = current.next;
    }
    let cycle = this.head;
    while(cycle!==null){
      if(cycle.elims === min){
        list.push(cycle.name);
      }
      cycle = cycle.next;
    }
    let string = "";
    for(let i = 0; i<list.length; i++){
      string= string + list[i] +", ";
    }
    string+=" all have " + min + " kills";
    return string;
  }

  randomize(){
    let nodes = [];
    let current = this.head;

    while (current !== null) {
        nodes.push(current);
        current = current.next;
    }

    for (let i = nodes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nodes[i], nodes[j]] = [nodes[j], nodes[i]];
    }

    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
        nodes[i + 1].prev = nodes[i];
    }
    this.head = nodes[0];
    this.tail = nodes[nodes.length - 1];
    this.tail.next = null;
    this.head.prev = null;
  }
}


function viewList(){
  document.getElementById("viewListOutput").value = game.toString();
  document.getElementById("sizeOutput").value = game.getSize();
}

function getInfo(){
  let name = document.getElementById("getInfoInput").value;
  let string = game.getInfo(name);
  document.getElementById("getInfoOutput").value = string;
  document.getElementById("getInfoInput").value = "";
}

function remove(){
  let name = document.getElementById("removeInput").value;
  game.remove(name);
  viewList();
  alert("Removal Successful");
  document.getElementById("removeInput").value = "";
}

function clearOutput(){
  document.getElementById("getInfoOutput").value = "";
}

function mostKills(){
  document.getElementById("getInfoOutput").value = game.findMostKills();
}

let nameString = 'removed for privacy reasons';

let numberString = `removed for privacy reasons`;

let names = nameString.split("\n");
console.log(names);
let numbers = numberString.split("\n");
const game = new DoublyList();

for (let i = 0; i < names.length; i++) {
  const x = new Node(names[i], numbers[i]);
  game.append(x);
}

function clearList(){
  document.getElementById("viewListOutput").value = "";
}

function leastKills(){
  document.getElementById("getInfoOutput").value = game.findLeastKills();
}

function randomizeList(){
  const userConfirmed = window.confirm("Are you sure you want to perform this action?");
    
    if (userConfirmed) {
        alert("List has been randomized.");
        game.randomize();
        document.getElementById("viewListOutput").value = game.toString();
    } else {
        alert("List not randomized");
    }
}

