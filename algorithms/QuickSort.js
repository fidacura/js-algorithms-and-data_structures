//--------------------------------------
// Quick Sort Algorithm / O(n log n)
//--------------------------------------

const quickSort = arr => {
  if (arr.length <= 1) return arr;
  
  const l = arr.length-1;
  const pivot = arr[arr.l];
  const left = [];
  const right = [];
  
  for (let i = 0; i < l; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    }
    else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};
