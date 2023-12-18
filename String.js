//Q) What is the difference between indexof() and search() method of a string ?
//Ans.indexOf() and lastIndexof() search for a character or string within string and returns index number. they both can have start index number, search() method is doing the same thing, but it do not take start index

let str = "This is the string ";
console.log(str.indexOf("is"));
console.log(str.lastIndexOf("is"));
console.log(str.indexOf("is", 5));

//Q)Extraction methods.1)String extraction method => slice(), substr() 2) Character Extraction method => charAt(), charCodeAt()

console.log(str.slice(2, 6));
console.log(str.substring(2, 4));
console.log(str.substr(2, 5));
console.log(str.charAt(2));
console.log(str.charCodeAt(2));
//

let dt = new Date();
console.log(dt);
console.log(dt.getFullYear());
console.log(dt.getTime());
dt.setFullYear(2020);
console.log(dt);

//How can you set 50 days before current date?
//Ans)
