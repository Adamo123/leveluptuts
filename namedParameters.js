console.log("Hello Baby!");

// const makePerson = (name, age, job, lastName) => {
//   return {
//     name,
//     age,
//     job,
//     lastName
//   };
// };

//Now suppose that we redundantly create another object...


// const tempName = {
//   name: "Scott",
//   lastName: "Tolinski",
//   age: 32,
//   job: "Web Dev"
// }

//Now we put our tempName into our makePerson function

// const dev = makePerson(tempName);
//
// console.log(dev);

//If you look at the console output, you will see that it puts the whole object as an argument in the name parameter and the rest of the parameters are undefined.
//So...we add curly brackets to the makePerson function...

// const makePerson = ({name, age, job, lastName}) => {
//   return {
//     name,
//     age,
//     job,
//     lastName
//   };
// };
//
// const dev = makePerson(tempName);
//
// console.log(dev);

//And it doesn't matter the order you put your parameters in...

// const makePerson = ({name, job, age, lastName}) => {
//   return {
//     name,
//     age,
//     job,
//     lastName
//   };
// };
//
// const dev = makePerson(tempName);
//
// console.log(dev);

//Suppose....

const tempName = {
  firstName: "Scott",
  lastName: "Tolinski",
  age: 32,
  job: "Web Dev"
}

const makePerson = ({firstName, job, age, lastName}) => {
  return {
    name: firstName + " " + lastName,
    age,
    job,
  };
};

const dev = makePerson(tempName);

console.log(dev);

//The lesson here is to use named parameters so that your code is less error-prone and less breakable.
