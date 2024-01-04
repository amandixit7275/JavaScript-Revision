//Q) Given value is an array or not ?
let arr = [1, 2, 3, 4, 5, 3, 5];
console.log(toString.call(arr));
//Remove duplicate value from an array
//indexOf always return the first value

let Uarr = arr.filter((v, i) => arr.indexOf(v) === i);
console.log(Uarr);

//another way of ES6 syntax
let Urr1 = [...new Set(arr)];
console.log(Urr1);

//Q3) Remove null, undefined, 0, NaN and ' ' from array ?

let arr2 = [false, 0, null, NaN, 6, undefined, 90, "hi"];
//returns truthy value
let nArr = arr2.filter((v, i) => v);
console.log(nArr);

//Q4) Finding factorial
fac = 1;
let n = 3;
for (; n >= 1; n--) {
  fac = fac * n;
}
console.log("Factorial is " + fac);

//Q5) Check prime number
const Prime = (n) => {
  let isPrime = true;
  for (let cnt = 2; cnt < n; cnt++) {
    if (n % cnt === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime == true) {
    console.log(n + " is a prime number");
  } else {
    console.log(n + " is not a prime number");
  }
};
Prime(9);

//check whether a character is a vowel or a consonant.

function getVowel(char) {
  let n = char.toLowerCase();
  if (n == "a" || n == "e" || n == "i" || n == "o" || n == "u") {
    console.log(`${char} is a vowel`);
  } else {
    console.log(`${char} is a Consonant`);
  }
}
getVowel("E");

//Intersection of an array
let arra = [1, 2, 3, 4, 5, 6];
let arrb = [5, 6, 7, 8, 9];
let arrInter = arra.filter((v) => {
  return arrb.includes(v);
});
console.log(arrInter);
//Union of an array

let arrUnion = [...new Set([...arra, ...arrb])];
console.log(arrUnion);

//Fibonacci series: 0,1,1,2,3,5,8,13,21,34...

let a = 0;
let b = 1;
let fn = a + b;
console.log(a);
do {
  console.log(fn);
  fn = a + b;
  a = b;
  b = fn;
} while (fn < 50);

//Reverse the number or Palindrome

let num = 12345;
let rem = 0;
let rev = 0;
while (num > 0) {
  rem = num % 10;
  rev = rev * 10 + rem;
  num = parseInt(num / 10);
}
console.log(rev);
