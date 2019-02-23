const makePerson = ({ firstName, age, lastName, job }) => {
  return {
    name: firstName + " " + lastName,
    age,
    job
  };
};

const dev = makePerson({
  firstName: "Scott",
  lastName: "Tolinski",
  age: 32,
  job: "Web Dev"
});

console.log(dev);
