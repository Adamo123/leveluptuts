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
//
// console.log(power(2,4));

// const square1 = function(x) {
//   x = x * x;
// }
//
// console.log(square1(2));

// Notice how this DOESN'T return a value unless we explicitly state it like in the following

// const square1 = function(x) {
//   x = x * x;
//   return x;
// }
//
// console.log(square1(2));

// But using arrow functions, it automatically returns a values...NOT TRUE!

const square1 = (x) => {
  x *= x;
  return x;
}

console.log(square1(2));

































//
