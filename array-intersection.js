function findIntersection(arr1, arr2) {
  const set = new Set(arr1);
  const intersection = [];

  for (let element of arr2) {
    if (set.has(element)) {
      intersection.push(element);
      set.delete(element);
    }
  }

  return intersection;
}
