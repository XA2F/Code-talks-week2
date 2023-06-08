//Async/await makes Javascript wait until that promise settles and returns its result.
const { Readable } = require("stream");

// The await keyword is only valid inside an async function.
// The pros are that it makes it more readable, handles errors well, organizes our code, etc.

async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}
