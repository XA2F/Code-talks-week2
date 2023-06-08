//Async/await makes javascript wait until that promise settles and reurns it's result.

const { Readable } = require("stream");

//The await keyword is only valid inside an async function.
// pros are it makes it more Readable, handles erros well, organzies our code and etc...

async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();
