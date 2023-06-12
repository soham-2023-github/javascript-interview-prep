// FizzBuzz: Write a program that prints the numbers from 1 to 100. 
// For multiples of three, print "Fizz" instead of the number. 
// For multiples of five, print "Buzz." 
// For numbers that are multiples of both three and five, print "FizzBuzz."


function printFizzBuzz(endLimit) {
  for(let i = 1; i <= endLimit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

printFizzBuzz(100);
