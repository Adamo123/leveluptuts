var name = "Adamo";
var val = 0;

/*
if (val > 0) {
console.log(name + " is cool!");}
else if (val < 0) {
  console.log(name + " is not cool!");
}
else {
  console.log("No one is cool!");
}
*/

switch (val) {
    case 0:
            console.log("You have nothing");
            break;
    case 1:
            console.log("You have a single item");
            break;
    case 2:
            console.log("You have two items");
            break;
    default:
            console.log("Your case doesn't apply");
            break;
}
