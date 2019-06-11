// for (let num = 1 ; num <= 100; num += 1) {
//   if (num % 3 == 0) {
//     console.log("Fizz");
//   }
//   else if (num % 5 == 0) {
//     console.log("Buzz");
//   }
//   else {
//     console.log(num);
// }
// }
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
// read up on empty strings and booleans and the "Short circuiting of logical operators"

// Your code here
for (let height = 0; height < 8; height++) {
	let width = "#";
  		for  (i = 0; i < 8; i++) {
  			if (width = " ") {
              width = "#";

    	}
          else {
         width += " ";

           }




  }

console.log (width);


}
