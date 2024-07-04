// // You need to ensure type="module" must be present when you are linking .js file with .html file

// //----------- named import
// // import { firstName } from "./file2.js";
// // import { lastName } from "./file2.js";
// // import { user_name } from "./file2.js";
// // import { sum } from "./file2.js";

// // console.log(firstName);
// // console.log(lastName);
// // console.log(user_name);
// // sum(2,5);

// // ------------------ ek baar me saare import karlo


// import { firstName,lastName,user_name,sum } from "./file2.js";

// console.log(firstName);
// console.log(lastName);
// console.log(user_name);
// sum(2,5);


// ------------------ default import -> No need of {} -> curly braces

// import user_name from "./file2.js"
// console.log(user_name);

// -------------- same as above
// default sabko pata hai same name dena jaruri nahi hai
import nameOfUser from "./file2.js"
console.log(nameOfUser);
