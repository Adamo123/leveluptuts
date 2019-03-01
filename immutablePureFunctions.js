console.log("Yup!!!");

// Immutable vs. Immutable
// Can't be changed vs. can be changed
// This is why Scott is using a lot of const...Let is for declaring a block scope local variable, optionally initializing it to a value.


// let name = "Scott";
// name = name + " Tolinski";
// Why is this bad? It could cause some confusion later on. Name no longer means name.

// const name = "Scott";
// const fullName = name + " Tolinski";
//
//
// // Pure functions
// // Will always return the same thing with the same input
//
// const addTwo = (x) => x + 2
//
// // Now lets do a bunch of console logs
//
// console.log(addTwo(2));
// console.log(addTwo(2));
// console.log(addTwo(2));

// No matter how many times you do that, the console will always output the same thing, hence this is a pure function.

// But you may be using functions that are returning different things all the time based on outside variables. These are impure functions.

// let multi = 3
//
// const addThree = (x) => x + multi; // external state
//
// console.log(addThree(2));
// console.log(addThree(2));
// console.log(addThree(2));

// If you keep changing the multi variable. The output is not the same every time.

// Benefits of pure functions:
// Makes your code more testable...less chances of breaking
// You can cache their output using memorization
// No unintended consequences...the non-pure function has an external state...multi

// Let's look at a function that MODIFIES an external statement

let multi = 3;

const addFour = (x) => {
    multi += 2;
    return x + multi;
};

// We don't want to do this apparently

     
