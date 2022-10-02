/* 1. Using iteration, write a function fibs which takes a number and returns 
an array containing that many numbers from the fibonacci sequence. 
Using an example input of 8, this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].

2. Now write another method fibsRec which solves the same problem recursively. 
This can be done in just a couple of lines (or 1 if you’re crazy, 
but don’t consider either of these lengths a requirement… just get it done). */

function fibs(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    if (i <= 1) arr.push(i);
    else arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}

//alert(fibs(8))

function fibsRec(n, arr = [0, 1]) {
  if (n <= 0) return (arr = []);
  if (n === 1) return (arr = [0]);
  if (arr.length >= n) return arr;
  return fibsRec(n, [...arr, arr[arr.length - 1] + arr[arr.length - 2]]);
}

//alert(fibsRec(8))
