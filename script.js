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

let nameString = `Dylan Moncayo
David Jung
Callie Steele 
Amelia Bell
charly smith
Max Adkisson
Laurel Hand
Sarah Kuczynski
Meagan Winckler
Justin Lee
Kristina Todorovich
Saskia Molina Gámez 
Kai Bek
Brett Yuter
Grace Funke
Jordan Dye
Katie Favour 
Taylor Korner
Autumn Harris
Anthony Greco
Daniel Levering
Arnav Nere
Ava Lukyan
Kiki rosema 
Ami Bledea
Shyanne St. Louis
Jack Viets
Gabby Elkins
Abbey Pechter
Ruth harrison
Divya Mudimbi
nandini kandamuri 
Eli Alper
Sara Budziak
caylie zahnow
Diego Volpe
Matthew Ju
Ben Miller
Benjamin Frayman 
elliott fosdick
Madyn Faber
Dylan Kaufman 
Abhishek Kakde
Dylan Chung
Izzy Suarez
Jack McGowean
Mitchell Saunders 
Sean Kalu
Aashini Kochar
Samone Stevens 
Aashi Shah
christina raquel 
Nethra Anand
Sarah Besser
Carly Sides
Miya Malfait 
Sashank Kurra
Elly Kwon
Jamie Gould 
Lucas Tyderek
Ryan Allen
Campbell Woolard
Chris Stukel
Luke Wu
vicky burda
Paarth Keswani
Scott Goldstone
Anthony Martorano
Emma Fricano
Shaw Smith
Tyler Espina
Holden Smith
Sarthak Agrawal
Mackenzie Brogan
Andrew Laborevitch
Nick Dinh
Bryce Drexler
Brandon Smith
Lauren Hampton
Ana Pucetti
James Zhou
Ella Winsett
Marissa Marr
Olivia Lawhorn
Naiya Bass
Claire Fleming
Emily dornbusch
Logan Schenk
Ryan steinert
Brandon Edelheit
Alisa Ster
Dylan Einhorn
Josh Kapur
Maya Raval
Christopher Elliott
Brian Kim 
Ruhi Subramanian
Katie Polisson
Aaron Griffith
Violet Cairo 
Brayden Dickstein
Agatha Bielaga
sona saran
Caden Psaras
Mac McRae 
Tyler Singer
Sam Shlau
Morgan Hart
Ashley Vollen
Kenan Cheung
Zachary Seaver
Sahaana Kathirvel
Cameron Keogh
Liam O’Brien
Garrett Rubin
vidya kasichainula
Louis Gatta
Kelsey Vernon
Brayden glassman
Natalia Robles
Bisti Potdar
Elyse Davis
Charlie Blackmer
Sam dugan
Joshua Cahill
Eli Spivak
Giacomo urso
Nolan Clay
Shep ratnow 
Sophia LaBelle
Purab Arora
Roman zaslavskiy
Byungyoon you 
Samuel Servin
Kayall Manivasagam 
Derek Steinert
Brooke Arndt
Teagan Lai
Emmitt Brown-Richardson
Sarah Zimmerman 
Annika Chudy
Ryan Klene
Ben Shkap
Deen Hatibovic
Danielle gyorfi
Nia Dahis 
Aidan Kamai
Gavin Mansfield
Neil Mody-Deshmukh
Christian Choi
ally dominguez
Haley Kalinowski
Ben Ziegler
Claire Dornbusch 
jamilet sanchez
Nicole Tomaszewski
Olivia Dornbusch
Jackson Gurvis
Katie Cherwenka
Adam Meadows
Nicholas Miles
Brendan Larsen
Anna Lee`;

let numberString = `847 840 2700
8478099296
815-451-9758
7245846975
8479035289
2247780006
9199094477
8722270131
8479175553
562-587-2900
8476685630
8477695771
224-817-7956
8475420094
8479716552
224 358 2821
2243554840
2244587633
847-691-6215
2244759897
2246026327
8479043398
8477694336
2244330261
847-816-4767
224-704-9151
847-970-0856
224-436-1755
847-331-0707
2243835621
8577530554
630-440-5072
847-922-0961
2245150280
773-849-7300
2244215591
2244365134
2243582196
8476603425
8472575210
8476449855
8473238959
2242399357
2242370871
8475611066
2244439396
2249318285
8479778914
2248640400
2247751033
2243589768
8479708868
2246232098
8478000987
847-848-8707
8476685591
847-345-0330
2246006746
8479871540
6308271744
224-475-8744
3125436892
8478079976
8473711201
2249314747
2247150916
2242579816
2244248725
2242233102
3854044752
224-808-8393
(940)-218-5478
2243589020
847-770-1729
224-508-5655
8476688260
847-373-3078
8478000831
847-513-2468
(847)370-3924
8476305280
423-580-6144
8477691367
847-867-9684
224-302-8750
6097875263
2244062845
8476872321
2242327603
224-229-9296
2248570052
2242204557
2242898564
224-723-8594
847-772-3828
224-475-9865
8479226063
847-868-5305
224-518-2473
847-571-9634
2242802646
2242538896
2244752248
847 224 3759
8479225730
847-505-8279
2248640000
2243607203
2242875158
847-903-2441
224-656-7350
8476683002
8478901299
224-628-3731
2242584837
5635080001
8479037552
2243615696
8473314682
8475248930
2012544932
8474449288
847-380-0360
8478485255
7738495996
847-347-1226
8479225133
8479515360
2244755657
2245635242
5134981869
224 8048550
7742628304
8475304777
2242586255
2243887290
847-800-0258
8479099589
2245012171
8474719072
8479245870
847-533-3220
8477028114
7733086642
8476022341
847-909-6771
224-651-1565
8472248002
224-322-7366
8473800830
2244090626
8474048485
2242138485
2244060868
8477694363
8473705708
224-406-1588
8474449692
8477784247
6237766487
8477321916
8475300557
2249318850`

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

