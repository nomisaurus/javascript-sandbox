
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
