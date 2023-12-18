//Q1. Difference between null and undefined
//Ans. Undefined: is the resutl of the variable whose value is not assigned. wherease null is assigned to a variable

let a;
let b = null;
console.log(a);
console.log(typeof a);
console.log(b);
console.log(null == undefined);
console.log(null === undefined);

//Q2. What is Functional ,global , and block scope?

let c = 10;
function Scope() {
  let b = 20;
  {
    let d = 30;
    console.log(c, d, b);
  }
}
Scope();
//Hoisting: A process in happening behind the scene, internally it i bringing the declaration on the top.
console.log(d);
var d = 10;
