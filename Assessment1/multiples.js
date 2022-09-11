//solution 1

//function sumOfMultiples(number) {
//  let sum = 0;

//loop through all the numbers from 1 to 999
// for (let i = 0; i < 1000; i++) {
//get the numbers which are multiples of 3 or 5
//   if (i % 3 === 0 || i % 5 === 0) {
//      sum += i;
//   }
//  }
//  return sum;
//}

//console.log(sumOfMultiples(3));
//console.log(sumOfMultiples(5));

//solution 2

const findSum = (n) => {
  let countArr = [];
  let sum = 0;

  for (let i = 0; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
      countArr.push(i);
    }
  }
  
  return countArr.reduce((acc, curr) => acc + curr);
};
console.log(findSum(10));
