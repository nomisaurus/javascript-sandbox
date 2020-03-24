
/**************************************************
 * JavaScript Sandbox
 */

/** Comments */

// single line comment

/*
    multiple line comment
    add as many lines as you like
*/

/** Variables and Constants */

// naming convention: name start with _ $ letter

// declare a variable that cannot change with the 'const' keyword
const message = 'Welcome to JavaScript Sandbox!';
// message = 'Hello!'; // error!
console.log(message);

// declare a variable that can change with the 'let' keyword
let total = 0;
total = 10;
console.log(`Your order total is $${total}.`);

// avoid using the 'var' keyword to declare variables
// console.log(oldMessage); // undefined, no error
// var oldMessage = 'This is an old message!';

/** Types and Operators */

// numbers
let price = 19.99;
price = price + 1; // add
price = price - 1; // subtract
price = price * 3; // multiply
price = price / 3; // divide
let remainder = price % 5;
let taxRate = 0.13;
price++; // increment
price--; // decrement

console.log('The data type of price is:', typeof price);
console.log('price:', price);
console.log('remainder:', remainder);
console.log('tax:', price * taxRate);
console.log(price++) // be careful: will increment after logging
console.log(++price);
console.log(price--);
console.log(--price);
