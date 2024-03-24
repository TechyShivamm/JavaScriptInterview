// callback functoin are used when there is an Asynchronous process

//A process which take sometime to execute is an asynchronous process,i.e.it won/t execute immediately

//Syntex of callback function
// ----------------------------------
// fName(function(para1,para2...paraN)){
//statement
// }

// ***basically callback function is a function as a paramenter in another function

// callback hell or pyramid of Doom
// Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure. Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code.

let data;
function fetchData() {
  setTimeout(() => {
    data = { pcode: 1001, pName: "orange" };
  }, 2000);
}

function displayData() {
  console.log(data); //- 2- undefined
  console.log("end here"); //3-end
}

console.log("start here"); //1:- this is running
fetchData();
displayData();
// ------------next-------------------------------

function fetchData1(cb) {
  //recived as a parameter
  setTimeout(() => {
    let data1 = { pcode: 1001, pName: "orange" };
    cb(data1);
  }, 2000);
}

console.log("start here"); //1st its running
fetchData1(function (data1) {
  // Anonoumus funtion pass as a Argument
  console.log(data1); // wait 2 sec & run this code
  console.log("end here"); //3 - after that run this code
});
// ---------------------

function cSqr(n, cb) {
  setTimeout(() => {
    cb(n * n);
  });
}

// let res = cSqr(2);
// console.log(res); //undefined

cSqr(2, function (res) {
  console.log(res);
  cSqr(res, function (res1) {
    console.log(res1);
  });
});
