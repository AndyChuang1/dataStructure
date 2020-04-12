function sumOfDigits(num) {
  console.log(num);
  if (num == 0) {
    return 0;
  }
  return (num % 10) + sumOfDigits(Math.floor(num / 10));
}
console.log(sumOfDigits(324));
