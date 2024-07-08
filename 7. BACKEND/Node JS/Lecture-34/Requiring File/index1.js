// //  both are same

// // Jo bhi file aap require() karte ho wo pahle run hoti hai
// let obj = require('./index2.js'); // index2 as a module import hua in in index1.js file me
//     // -----OR
// // let obj = require('./index2'); // index2 as a module import hua in in index1.js file me

// console.log(obj);

// // console.log(obj.pi);
// // console.log(obj.sum(2,3));
// // console.log(obj.square(6));

// // ----------- destructure (does same as above)

// // let {pi,sum,square} = obj; // same name se destructure karo jis name se aaya tha
// // console.log(pi);
// // console.log(sum(2,3));
// // console.log(square(7));

// // ------------------ after changing name
// // let {pii,sum,square} = obj;
// // console.log(pii);
// // console.log(sum(2,3));
// // console.log(square(7));

// // -------------------------
// let {pii : hello,sum,square} = obj;
// // console.log(pii); // error -> pii ka naam change hogya hai "hello"
// console.log(hello);
// console.log(sum(2,3));
// console.log(square(7));



// -----------------------------
let aaya = require('./index2');
console.log(aaya);