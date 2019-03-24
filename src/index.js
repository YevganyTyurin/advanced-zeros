module.exports = function getZerosCount(number, base) {

let allPrimeNumber =[];
let amountOfNumbers = [];
let filterPrimeNumber = [];
this.base = base;
let result;
let exponent;
let sum;

for (let i = 2; i <= base; i++) {
  if (this.base % i == 0) {
    this.base = Math.floor (this.base / i);
    allPrimeNumber.push(i);
    i--;
  }
} 

for (let i = 0; i < allPrimeNumber.length; i++) {
  if (amountOfNumbers[allPrimeNumber[i]] != undefined) {
    amountOfNumbers[allPrimeNumber[i]]++;
  }
  else {
    amountOfNumbers[allPrimeNumber[i]] = 1;
    filterPrimeNumber [allPrimeNumber[i]] = allPrimeNumber[i];
  }
}

filterPrimeNumber = filterPrimeNumber.filter(function() { return true; });
amountOfNumbers = amountOfNumbers.filter(function() { return true; });

for (let j = 0; j < amountOfNumbers.length; j++) {
  exponent = 1;
  sum = 0;
  while (number / Math.pow(filterPrimeNumber[j], exponent) >= 1) {
    sum = sum + Math.floor (number / Math.pow(filterPrimeNumber[j], exponent));
    exponent++;
  }
 filterPrimeNumber[j] = Math.floor (sum / amountOfNumbers[j]);
}
  result = Math.min (...filterPrimeNumber);
  return result;
}