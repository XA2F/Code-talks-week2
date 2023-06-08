const numbers = [48, 20, 18, 7, 12, 9, 8, 10, 12, 96, 3, 36, 51];

function divisibleBythree(arr) {
  // let new2 = [];

  // for (let i = 0; i < arr.length; i++) {
  // if (arr[i] % 3 === 0 && arr[i] % 6 === 2 && arr[i] % 6 === 2) {

  // }
  let newn = arr.filter((n) => {
    return n % 3 === 0 && n % 6 === 0 && n % 9 !== 0;
  });
  return newn;

  // }
}

console.log(divisibleBythree(numbers));
