// work in progress XD

let unsortedArr = [
  81, 8, 37, 80, 1, 52, 79, 33, 22, 17, 76, 48, 41, 66, 70, 65,
];

function mergeSort(arr, newArr = []) {
  let merge = (a, b) => (a > b ? [a, b] : [b, a]);
  if (arr.length < 2) return arr;
  let leftArr = arr.slice(0, arr.length / 2);
  let rightArr = arr.slice(arr.length / 2, arr.length);
  let left = mergeSort(leftArr);
  let right = mergeSort(rightArr);
  return merge(left, right);
}

console.log(mergeSort(unsortedArr));
