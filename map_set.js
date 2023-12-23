//map is similar to object, but with map, we can have key of any data type,String, Number, Booean ,etc

let product = new Map();
product.set("Name", "Aman").set(1, "Roll Number").set(true, "Student");
console.log(product);
//size property of a map
//another way of defining key, but it's not a good way because in this way , key start behving like a string only, like object , which kills the beauty of the map.
console.log(product.size);
product["price"] = 300;
console.log(product);
//get method i.e get('key')= will get the value
console.log(product.get("Name"));
//has property
console.log(product.has("Name"));
//Map are iterable
//.values return values
for (let v of product.values()) {
  console.log(v);
}
console.log("******");
//.keys return keys.
for (let k of product.keys()) {
  console.log(k);
}
//.entries return key & values
for (let [k, v] of product.entries()) {
  console.log(k, v);
}
//for Each method
product.forEach((v, k, m) => {
  console.log(`${v}-${k}`);
  console.log(m);
});
//Object - Array
let obj = {
  Name: "Aman Dixit",
  Roll_no: 35200460358,
  Subject: "Computer Science",
};
let obj_arr = Object.entries(obj);
console.log(obj_arr);
//Object - Map;
let productMap = new Map(Object.entries(obj));
console.log(productMap);

//Map- Object

let map_obj = Object.fromEntries(product.entries());
console.log(map_obj);

//Removing the item from the map
console.log(product);
//deleting the item
product.delete("Name");
console.log(product);
//clearing the whole map
product.clear();
console.log(product);

//SET method:is a collection of unique values
let st = new Set();
st.add("first").add("second").add("third").add("first");
console.log(st);
//we can add array in set
let stArr = new Set(["first", "second", "third", "first"]);
console.log(stArr);

//looping through the set
console.log(st.size);
for (let v of st) {
  console.log(v);
}
// removing from set
st.delete("first");
console.log(st);
st.clear();
console.log(st);

// WEAK SET AND WEAK MAP ARE LEFT FOR THE FUTURE
