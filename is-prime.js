function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  if (number <= 3) {
    return true;
  }

  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }

  let divisor = 5;
  while (divisor * divisor <= number) {
    if (number % divisor === 0 || number % (divisor + 2) === 0) {
      return false;
    }
    divisor += 6;
  }

  return true;
}
