//A callback is a function that is to be executed after another function has finished executing — hence the name ‘call back’.
function hello(callback){
prompt("What is your name?" , name);
console.log ("Thanks!");
callback(name);
}

function greeting(name) {
  console.log("Your name is " + name);

}

hello(greeting);

//Kinda works but having trouble passing in my name
