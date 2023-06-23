// Merge Sorted Arrays: Write a function that merges two sorted arrays into a single sorted array.


function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements from arr1, if any
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // Add remaining elements from arr2, if any
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}


