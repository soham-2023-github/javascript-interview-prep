function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}


const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const result = arraysAreEqual(arr1, arr2);
console.log(result); // Output: true



/* 

In this example, we compare arr1 and arr2, 
and the function returns true since both arrays 
have the same elements in the same order.

The time complexity of this solution is O(n), 
where n is the length of the arrays. 
We only need to iterate through the arrays 
once to compare the elements, resulting in an efficient comparison.

*/
