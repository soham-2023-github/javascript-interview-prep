// Fibonacci Sequence: Write a function to generate the nth Fibonacci number.

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  let fibPrev = 0;
  let fibCurrent = 1;

  for (let i = 2; i <= n; i++) {
    let temp = fibPrev + fibCurrent;
    fibPrev = fibCurrent;
    fibCurrent = temp;
  }

  return fibCurrent;
}

const n = 8;
const result = fibonacci(n);
console.log(result); // Output: 21
