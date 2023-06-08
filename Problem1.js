// Coding Problem 1

// What is a promise?

// A promise is a way to handle asynchronous operations. Something that will be resolved in the future, exactly like a promise in real life.

// What are promises used for?

// Promises are used for async operations, things like reading and writing filesystems, network requests, and database operations.

// What are pro/cons to using a promise?

// Some pros of promises I can name are cleaner and readable syntax for handling async operations; it can help prevent callback hell; and it makes it easier to handle errors.

// Please code some examples of promises to show to the class.

// Promises are objects that represent the eventual completion or failure of an asynchronous operation.

//this would be an example of reading files with promises
const fs = require("fs");

const readFilePromise = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

readFilePromise("example.txt")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
