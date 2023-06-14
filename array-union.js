function arrayUnion(arr1, arr2) {
  const unionSet = new Set([...arr1, ...arr2]);
  const unionArray = [...unionSet];
  return unionArray;
}


const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const result = arrayUnion(arr1, arr2);
console.log(result); // Output: [1, 2, 3, 4]



/*

In this example, we generate the union of arr1 and arr2, 
resulting in an array containing elements [1, 2, 3, 4]. 
Duplicate elements (2 and 3) are eliminated in the union.

This solution has a time complexity of O(m + n), 
where m and n are the lengths of arr1 and arr2, respectively. 
The Set data structure provides efficient deduplication 
by using a hash-based lookup, 
ensuring that each element is present only once in the resulting union.

*/
