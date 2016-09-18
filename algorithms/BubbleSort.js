//--------------------------------------
// Bubble sort algorithm / O(n^2)
//--------------------------------------

const bubbleSort = (arr) => {
  do {
    let swapped = false;
    for (let i = 0, l = arr.length; i < l; i++){
      if (arr[i] > arr[i+1]) {
        const tmp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);
};

