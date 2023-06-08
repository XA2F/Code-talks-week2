//Coding Problem 2

// What is a callback in Node.js?
// in node a callback is a function that is passed as an argumnt to another function. It used to handle asynch operations.

// What is callback hell?

// callback hell is a term used to describe when multiple nested callbacks are used to handle asynchronous operations.

//Why does callback hell occur and why should we avoid it?

//callback hell occurs when mutliple nested callbacks are nested within each other

//Example of callback hell
// const fs = require('fs');

// fs.readFile('file1.txt', 'utf8', (err, data1) => {
//   if (err) {
//     console.error(err);
//   } else {
//     fs.readFile('file2.txt', 'utf8', (err, data2) => {
//       if (err) {
//         console.error(err);
//       } else {
//         fs.readFile('file3.txt', 'utf8', (err, data3) => {
//           if (err) {
//             console.error(err);
//           } else {
//             console.log(data1 + data2 + data3);
//           }
//         });
//       }
//     });
//   }
// });
