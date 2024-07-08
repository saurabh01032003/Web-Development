
// let pi = Math.PI;
// console.log(pi);

// function sum(a,b){
//     return a+b;
// }
// function square(num){
//     return num*num;
// }

// console.log(sum(1,5));
// console.log(square(5));

// ish file (index2.js) ko hum export kara rhe in index1.js me -> index2.js acting as module by default -> require('') dikh gaya

// by default this module(index2.js) is exporting an empty object

// module.exports = {}; // by default


// module.exports = pi; // agar ek hi variable or function ko export karna ho -> no need to write within {} braces 
// module.exports = {pi,sum,square}; // explicitly

// --------- OR

// Jab bhi key and value of object same ho tab you can write only one among them -> as seen above
// module.exports = {
//     pi : pi, //--> pi
//     sum : sum, // -->sum
//     square : square, // --> square 
// }

// // --------- OR
// module.exports = {
//     pii : pi, // pi ka name change ho gaya hai to pii
//     sum,
//     square,
// }


// --------------------- You can export anything 
module.exports = "My name is Saurabh Mishra"; // string export kar rhe