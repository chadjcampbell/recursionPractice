/* Build a function mergeSort that takes in an array 
and returns a sorted array, 
using a recursive merge sort methodology. */

let unsortedArr = [
  81, 8, 37, 80, 1, 52, 79, 33, 22, 17, 76, 48, 41, 66, 70, 65,
];

function mergeSort(arr) {
  function merge(a, b) {
    let sortedArr = [];
    while (a.length !== 0 && b.length !== 0) {
      if (a[0] < b[0]) {
        sortedArr.push(a[0]);
        a.shift();
      } else {
        sortedArr.push(b[0]);
        b.shift();
      }
    }
    if (a.length > 0) sortedArr = sortedArr.concat(a);
    if (b.length > 0) sortedArr = sortedArr.concat(b);
    return sortedArr;
  }
  if (arr.length < 2) return arr;
  let leftArr = arr.slice(0, arr.length / 2);
  let rightArr = arr.slice(arr.length / 2, arr.length + 1);
  let left = mergeSort(leftArr);
  let right = mergeSort(rightArr);
  return merge(left, right);
}

//alert(mergeSort(unsortedArr));
