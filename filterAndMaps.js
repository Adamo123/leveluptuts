var animals = [
  {name: 'Sparky' , type: 'dog'},
  {name: 'Mila' , type: 'cat'},
  {name: 'Robert', type: 'camel'},
  {name: 'Rover' , type: 'dog'}
]
console.log(animals);

//Now let's filter this array so that we get a new array with only the dog type
// We will use a higher order function...filter. Filter is a function of an array which takes in another function as an argument and then filters it out outputs the filtered array.

//First, let's look at how this done with a normal for loop...

var dogs = [] //declaring a variable which is of the array type
// Then we populate this new array by iterating through it and finding the dogs
for (i = 0; i < animals.length; i++) {
  if (animals[i].type === 'dog')
    dogs.push(animals[i]);


}
console.log(dogs);

//Now let's rewrite this using the filter function
/*I think the (function(animal)) {
    return animal.species === 'dog';
}) is an imediately invoked function expression. The guy in the tutorial says that functions that you send to other functions are named callback functions. Filter takes each item in the animals array and passes it into the callback function*/
var dogs2 = animals.filter(function(animal)) {
    return animal.species === 'dog';
})
