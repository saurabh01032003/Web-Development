// var a = 120;
// console.log(a);
// function sam() {
//   console.log("hi bro");
// }
// sam();

// ------------

// function sam() {
//   console.log("hello there");
// }
// var a = 10;

// sam();
// console.log(a);

// ------------
//whenever you try to access a variable or a function before its
//declaration this is called hoisting.

// // -----------------
// sam();
// console.log(a);

// function sam() {
//   console.log("hello there");
// }
// var a = 10;

// -----------------

// sam();
// console.log(a); //Error(Cannot access 'a' before initialization) :  as a is initialised using let identifier

// function sam() {
//   console.log("hello there");
// }
// let a = 10;

// ----------------

// let a = 20;
// console.log(a);

// console.log(b); //hoisting
// var b = 10;
// console.log(b);

// ---------------

// console.log(a);
// const a = 10

// ---------

console.log(a)
console.log(b)
console.log(c)
var a = 10;
let b = 100;
const c = 1000;

// Options for above code
// 1. 10 100 1000
// 2. undef err err
// 3. 10 undef undef
// 4. undef undef undef
// 5. none

// Correct option is 'D' : ans is "undefined error" (as once the error occured ,you can't tell anything about below code)


// --------------------------------------------------------------------------------------------------------------

// // Whenever you try to access a variable or functions before initialising them 

// console.log(a);
// // const a; // Syntax error

// console.log(a);

// console.log(b); // can't access before declaration
// console.log(c); // will not execute as error is thrown above

// var a = 10;
// let b = 100;
// const c = 1000;


// ---------------------------------
// carName = "Volvo";
// let carName;

// -----------------------------------
// // x = 5
// console.log(x);
// var x = 5;


// ----------------------------------
// sum();

// function sum(){
//     console.log(5+2);
// }