//asynchronous
console.log("1");
setTimeout(() => {
  console.log("2");
}, 1000);
console.log("3");

let promise = new Promise((resolve, reject) => {
  let goodDeveloper = false;
  if (goodDeveloper) {
    setTimeout(() => {
      resolve("Hire Aman he is a good developer ");
    }, 1000);
  } else reject("You did a mistake by not hiring Aman");
});

//now handling a value which we get return through promise

promise
  .then((res) => {
    console.log(res);
  })
  .catch(console.error());
