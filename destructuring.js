// destructuring allows you a way to essentially pull out items from an array or an object and assigns them to a variable of the same name.

// var newArray = ["hi", "two", "madam", "cow", "dog", "mike"];
//
//
// //this takes each element of the array and assigns it to a,b,c
// // const [a, b, c] = newArray;
// //
// // console.log(b);
//
// //or check this out
//
// const [a, b, ...c] = newArray;
//
// // It takes a and b, and assigns them single values from newArray, then takes the rest of the newArray, and puts them in c as a new array.
//
//
//
// console.log(c);

//He talks about the object spread operator and it's not clear whether it's available yet and he talks about compiling?

//Let's say we are creating an object...

const person = {

name : "Scott",
age: 32,
job: "Web Dev"

};

//Let's say we are gonna make an arrow function...

// const makePerson = (name, age, job) => {
//   return {
//     name: name,
//     age: age,
//     job: job
//   };
// };
//
// console.log(makePerson("scott", 32, "web dev"));

//But there is a better way. If your property is named the same as the argument, you can write

const makePerson = (name, age, job) => {
  return {
    name,
    age,
    job
  };
};
// console.log(makePerson("scott", 32, "web dev"));

// Now let's do some destructuring with objects...left off at 10:59

const dev = makePerson("scott", 32, "web dev");

// console.log(makePerson(dev));

// Let's say we wanted to pull out the name from this, we can say...

// const name = dev.name;

//or

// const devName = dev.name;

//But all this naming makes things confusing

//We can write...

// const { name } = dev;

//This may appear as shorthand, but it allows you to have consistent code. Things are named consistently and you're not reassigning a bunch of names to things. This is gonna keep your code cleaner and it's also gonna make things easier to read and parse.

//So you are pulling out the property from the object and assigning it to a new variable. We do this a lot in react this.props.names or const { names } = this.props

// console.log(name);

// We can use the spread operator ...

const { name, ...rest} = dev;

console.log(name, rest);

//All this is to make the code a little more cohesive...no need to name a bunch of names for nothing.
