// -----------Section29-------------

//Object LiteralL is simply a key value pair of a data structure.
let obj = {
  pCode: { id: 1, sp: "ABC" },
  pName: "Apple",
  getData() {
    console.log(obj.pCode, obj.pName);
  },
};
obj.getData();
console.log(obj.pCode);
//Can we have dynamic keys with object literal

let tv = "pCode";
let ob = {
  [tv]: 1001,
  pName: "Banana",
  getData() {
    console.log(ob.pCode, ob.pName);
  },
};
ob.getData();
//What is property value short hand with an object literal ?
let prCode = 1001;
let prName = "Apple";
let objj = {
  prCode,
  prName,
};
console.log(objj);
//What is the output of this code ?
//example of the Pass by reference.

let obje = { a: "First" };
let obje1 = obje; //here we are assigning the value, here reference of the object has been passed,here both object are sharing the same location, here it is not creating the clond
obje1.a = "Second";
console.log(obje1.a);
console.log(obje.a);

//so, How can you create a clone or separate copy of an object literal ?
let objec = { a: "First" };
let objec2 = Object.assign({}, objec);
objec2.a = "Second";
console.log(objec.a);
console.log(objec2.a);

// ------Section30----------
// Question-1) What is this object?
//Ans) it contains the current context, 'this' can have different value depending upon where it is placed.

console.log(this); //here this points toward the window object
window.a = 5;

//here test function is a part of the window object
function test() {
  console.log(this.a);
  //is thie case: this refer to the global scope
}
test();

console.log(this); //here still it points toward the window object, test() function is actually the part of the window object

//another use case of this
const obc = {
  test() {
    console.log(this); //now this is pointing to obj
  },
};

obc.test();
//but this does not work with the arrow function: Actually it refers to the global object

// ----Section31---------
//What is the purpose of call(),apply(),and bind() method ?
//call is used to change the reference of this object.
function test(b, c) {
  //when we use call() method the first parameter is always passed to this
  console.log(this); //here this points to the first parameter
  console.log(b, c);
}

let ob1 = {
  a: 5,
};
//now I want to assing the value of this to ob1,
test.call(5, 6); //the call() method takes first argument as the obj to be passed to this, when we say call the first parameter is always pass to this

//apply() is used for the very same thing, but here we can pass only two argument, first is the this argument , second is the array, containing rest of the argument.
test.apply(ob1, [6, 7, 8]);
//bind is almost same as the call but it doesn't execute the function immediately, instead it retuen another function. That is it acts like function expression.
const fe = test.bind(ob1, 9, 0);
fe();

// ----class,class expression & static members---
//The whole concept of the class is to create a blueprint commonly known as 'Prototype'
class House {
  //constructor is the method which is executed immediately when we create the instance of the class
  constructor(nDoors, windows) {
    console.log("constructor called");
    //creating the member of the class(here properties), which is going to recieve variable & value for the object, through constructor method
    this.nDoors = nDoors;
    this.windows = windows;
  }
  //lets create the method
  showData() {
    console.log(`The number of doors are ${this.nDoors}
    and the number of windows are ${this.windows}`);
  }
}
const obb = new House(3, 5); //creating the instance of a class,and now see constructor method is executed immediately
const obb1 = new House(2, 6);
obb.showData();
obb1.showData();
