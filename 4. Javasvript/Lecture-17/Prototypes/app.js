// // Prototype is an Object act as fallback source

// let obj = {
//   a: 10,
//   b: function () {
//     console.log("hi bhai");
//   },
// };

// // obj.d(); //wrong
// obj.b(); //hi bhai
// console.log(obj.a); //10
// console.log(obj.toString); // this method is present in prototype of object
// console.log(obj.c); //undef
// console.log(obj.c()); //error

// ------------------------------------

//dender proto -> pitaji value batane ke liye

// ------------------------In case of Objects
// let obj = {
//   a: 10,
//   b: function () {
//     console.log("hi bhai");
//   },
// };

// console.log(obj.__proto__ === Object.prototype);
// console.log(Object.prototype.__proto__ === null);


// -----------------------------For Strings
// let str = "saurabh Mishra";
// console.log(str.length);
// console.log(str.__proto__ === String.prototype);
// console.log(String.prototype.__proto__ === Object.prototype); 
// console.log(Object.prototype.__proto__ === null);

// -----------------------------------
// let arr = [10,'sam',"hi Sush",23];
// console.log(arr.length);
// console.log(Array.prototype);
// console.log(arr.__proto__ === Array.prototype);
// console.log(Array.prototype.__proto__ === Object.prototype);
// console.log(Object.prototype.__proto__ === null);