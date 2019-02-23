console.log(this);

const test = {
  testFunc: function() {
    console.log(this);
  },
  testFuncTwo: () => {
    console.log(this);
  }
};

function team() {
  console.log(this);
}

const button = document.getElementById("new-colors");
button.addEventListener("click", function() {
  console.log(this);
});

// test.testFunc();
// test.testFuncTwo();
// team();
// var test = new team();
