//call back funtion are used when there is an asynchronous process
//when there are multi level function, its a hell of job & that's way  its called "callback hell" or "pyramid og doom"
// to avoid the callback hell "promise object is invented"

//promise object is a better way to write callback processes & the best way to know this is by converting or rather refectoring code of callback function with a promise

// when we create a promise, by default there is a pending state/pending status
//finally will  executed after all the order processes are executed

// Every "then" should have return a promise when you are channing the promise with multiple processes

//syntex
let pr = new Promise((resolve, reject) => {
  //statement
  setTimeout(() => {
    resolve("data");
  }, 2000);
});
pr.then((msg) => {
  console.log(msg);
})
  .catch((err) => console.log(err))
  .finally(() => console.log("finishing process"));
// -------------

const cSqr = (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n * n);
    }, 2000);
  });
  // return pr;
};
//by default fumction can not be :thenable
cSqr(3)
  .then((res) => {
    console.log(res);
  })
  .catch(() => {
    console.log("error");
  });
// ----------------

function fetchDate(cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = { pcode: 1001, pName: "orange" };
      resolve(data);
    }, 2000);
  });
}

fetchDate()
  .then((data) => {
    console.log("data", data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    localStorage;

    console.log("program end");
  });
// ---------------
const cSqr1 = (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n * n);
    }, 2000);
  });
  // return pr;
};
//Method 1
// cSqr(3)
//   .then((res) => {
//     console.log(res);
//     cSqr(res).then((res) => {
//       console.log(res);
//     });
//   })
//   .catch(() => {
//     console.log("error");
//   });
// method 2 :-Promise chaining
// -------
cSqr1(2)
  .then((res) => {
    console.log(res);
    return cSqr(res);
  })
  .then((res1) => {
    console.log(res1);
  })
  .catch((error) => {
    console.log(error);
  });
