/* Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writing .length after it.

let abc = "abc";
console.log(abc.length);
// → 3
 */

// let hashTag = "#";
// for (i = 0; i < 7; i++) {
// 	console.log(hashTag);
//   	hashTag = hashTag + "#";
// }

/* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.) */


// for (num = 1; num <= 100; num++ ){
// if (num%3 == 0) {
//   console.log("Fizz");
// if(num%3 == 0 && num%5 == 0)
//   console.log("FizzBuzz");
//   }
// else if (num%5 == 0) {
//   console.log("Buzz");
//   if(num%3 == 0 && num%5 == 0)
//     console.log("FizzBuzz");
// }
// else {
//   console.log(num);
// }
// }

// Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
//
// Passing this string to console.log should show something like this:
//
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.


// let size = 8;
//
// let board = "";
//
// for (let y = 0; y < size; y++){
//   for (let x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0) {
//       board += " ";
//     }
//     else {
//       board += "#";
//     }
//
//   }
//   board += "\n";
//
//
// }
//
// console.log(board);

// let size = 8;
//
// // This is smart because it will be used as a reference once inside the for loop.
//
// let board = "";
//
// // He looks at this in terms of x and y which make sense. So to build the y part (or height), he starts a for loop
//
// for (y = 0; y < size; y++) { // This loop loops 8 times with a \n newline at the end of every loop, but before that happens the string is built up
//
// for (x = 0; x < size; x++) {
//
// // Think of this as the grid that it is...in the first iteration, the y will always be 0...using the modulo is ingenius because it basically determines even/odd and if you look at the grid in the exercise, odd is a " " and even is a "#"
//
//   if ((x + y) % 2 == 0){
//     board = board + " ";
//   }
//   else {
//     board = board + "#";
//   }

// }
// board += "\n"
// }
//
// console.log(board);

// Let's try this again...

let size = 8;

let board = "";

console.log(size);

for (y = 0; y < size; y++) {
  for  (x = 0; x < size; x++) {
      if ((x + y) % 2 == 0){
        board += " ";
      }
      else {
        board += "#";
      }
  }

  board += "\n"
}
console.log(board);

// From the hints:
//
// You can build the string by starting with an empty one ("") and repeatedly adding characters. A newline character is written "\n".
//
// To work with two dimensions, you will need a loop inside of a loop. Put braces around the bodies of both loops to make it easy to see where they start and end. Try to properly indent these bodies. The order of the loops must follow the order in which we build up the string (line by line, left to right, top to bottom). So the outer loop handles the lines, and the inner loop handles the characters on a line.
//
// You’ll need two bindings to track your progress. To know whether to put a space or a hash sign at a given position, you could test whether the sum of the two counters is even (% 2).
//
// Terminating a line by adding a newline character must happen after the line has been built up, so do this after the inner loop but inside the outer loop.
