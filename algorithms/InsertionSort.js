//--------------------------------------
// Insertion Sort Algorithm / O(n^2)
//--------------------------------------

const insertionSort = (arr) => {
  for (let i = 1, l = arr.length; i < l; i++) {
    for (let j = 0, j < i, j++) {
      if (arr[i] < arr[j]) {
        const spliced = arr.splice(i, 1);
        arr.splice(j, 0, spliced[0]);
      }
    }
  }
};
