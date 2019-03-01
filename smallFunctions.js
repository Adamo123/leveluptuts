// console.log("Hello");

// The following code is for a fake cart ***BAD CODE*** See under asterix's for good code.

// Scott assigned an array of values to a constant named "cart"

// const cart = [10, 5, 15];

// Then he has the two following arrow functions...

// const fakeAPICharge = total => true;
// const fakeSendReceipt = total => true;

// Then he assigns to the constant "checkout", a function that takes in the parameter "cart", and with the following code...

// const checkout = cart => {

// Reduce function reduces all the values in the cart and adds it to the total

//   let total = cart.reduce((tempTotal, item) => tempTotal + item);total = total + 10; // adding 10 for shipping
//   const orderSuccess = fakeAPICharge(total);
//   if (orderSuccess) {
//     fakeSendReceipt({
//       email: "fakeemail@gmail.com",
//       total
//     });
//   }
//   return orderSuccess;
//
// };

// You can run the function to see if it was a orderSuccess

// checkout(cart);

// The preceding code is not good because it can't be tested. We can't test if the subtotal was correct, if the total was correct, or if the e-mail was statement



//**************************************************************

// Let's refactor this. Look for the lowest hanging fruit first. This process will make the code 1. more readable 2. more testable 3. less brittle

const cart = [10, 5, 15];

// Then he has the two following arrow functions...

const fakeAPICharge = total => true;
const fakeSendReceipt = total => true;

// Then he assigns to the constant "checkout", a function that takes in the parameter "cart", and with the following code...

// By taking getSubTotal out of checkout, we solved a big problem...now we can test subTotal. By taking it out of the scope of the function, all we need to test it is an array of numbers...ie..the cart

const SHIPPING_COST = 10;

const getSubTotal = cart => cart.reduce((tempTotal, item) => tempTotal + item);

// We do this again for the total...

const getTotal = subTotal => subTotal + SHIPPING_COST;

// and for sending the receipt...

// You can imagine that "fakeSendReceipt" is an app you are using to send receipts.

const sendReceipt = ({email, total}) => fakeSendReceipt({
  email,
  total
});

// The lesson is that you want to simplify your functions...that's why we took out some of the individual functionality into its own thing. The more your functions tend toward having a single responsibility, the easier they will be to test and the less brittle they will be.

const checkout = cart => {
  const subTotal = getSubTotal(cart);
  const total = getTotal(subTotal);
  const orderSuccess = fakeAPICharge(total);
  if (orderSuccess) {
    sendReceipt({email: "fakeemail@gmail.com", total});
    
  }
  return orderSuccess;

};

// You can run the function to see if it was a orderSuccess

checkout(cart);
