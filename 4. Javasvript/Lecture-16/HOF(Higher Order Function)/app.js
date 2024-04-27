// function can be passed as arguement 

// 1. Functions which accepts some other function as an arguement -> a(are called higher order functions)

// function a(x){ // x is -> function b
//     x(); // function b is called here
//     console.log("I am inside a function");
// }

// function b(){
//     console.log("I am inside b function");
// }

// a(b); // fuction a is called

// // 2. function which can return  the entire function as a returned value -> higher order function
// function a(){
//     console.log("I am inside a");

//     return function b(){
//         console.log("I am inside b");
//     }
//     // return b;
// }

// let ret = a();
// console.log(ret);
// ret();


// 2. func which can return the entire function as a returned value

// ---------------------------

// What are callback function.
//=>when we pass a function(b)as an argument to HOF ❌
//=>when we pass a function(b)as an argument to HOF+mandatory to call that b function inside HOF✅

function a(x) {
  console.log(x);
  x();

  console.log("i am inside the a func");
}

function b() {
  console.log("i am inside the b func");
}

a(b);