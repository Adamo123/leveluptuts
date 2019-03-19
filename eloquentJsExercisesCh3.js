// There are 3 ways to write functions:

// 1. Functions as values
// 2. Declaration notation
// 3. Arrow functions




// console.log("Hello");
//
// const power = function(base, exponent) {
//     let result = 1;
//     for (i = 0; i < exponent; i++) {
//       result *= base;
//     }
//     return result;
// }
//
// console.log(power(3,2));

//Now let's look at how to do this with arrow functions

// const power = (base, exponent) => {
//   let result = 1;
//   for (i = 0; i < exponent; i++) {
//     result *= base;
//
//
//   }
//
// return result;
//
//
//
//
// }
// recursion //********************************************************

// function power(base, exponent) {
//   if (exponent == 0) {
//     return 1;
//   } else {
//     return base * power(base, exponent - 1);
//   }
// }
//
// console.log(power(2, 3));

// I don't see where it's storing it
// Here's another example from the book

// Consider this puzzle: by starting from the number 1 and repeatedly either adding 5 or multiplying by 3, an infinite set of numbers can be produced. How would you write a function that, given a number, tries to find a sequence of such additions and multiplications that produces that number?
//
// For example, the number 13 could be reached by first multiplying by 3 and then adding 5 twice, whereas the number 15 cannot be reached at all.
//
// Here is a recursive solution:

// function findSolution(target) {
//   function find(current, history) {
//     if (current == target) {
//       return history;
//     } else if (current > target) {
//       return null;
//     } else {
//       return find(current + 5, `(${history} + 5)`) ||
//              find(current * 3, `(${history} * 3)`);
//     }
//   }
//   return find(1, "1");
// }
//
// console.log(findSolution(24));

// Write a function min that takes two arguments and returns their minimum.

// let findMin = function min(x,y) {
//   if (x < y) {
//     console.log(x);
//   }
//   else if (y < x) {
//     console.log(y);
//   }
//   else {
//     console.log("They are the same");
//   }
// }
//
// findMin(3, 1);

// That was easy...now the harder stuff

const even = function isEven(num) {

  num *= -1;

  if (num == 0) {
    return true;
  }
  else if (num == 1) {
    return false;
  }
  else {
    return isEven (num - 2);

  }
}

console.log(even(-1));









































//
