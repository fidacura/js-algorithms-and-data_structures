//--------------------------------------
// Merge Sort Algorithm / O(n log n)
//--------------------------------------

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const length = arr.length;
  const middle = Math.floor(length/2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle, length);

  return stitch(mergeSort(left), mergeSort(right));
};


const stitch = (left, right) => {
  const results = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  results.concat(left, right);
};
