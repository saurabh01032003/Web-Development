// // // Promise : It is a constructor function which accepts call back function and call back function takes two arguement(resolve and reject)
// // let p1 = new Promise(function (resolve,reject){
// //     let data = "hi I am resolved data";
// //     let data2 = "hi I am rejected data";
// //     // resolve(data); // resolve and reject dono hai to jo pahle hua wo chalega
// //     reject(data1);
// // });

// // // p1.then().catch() // syntax

// // // p1.then(function (d){console.log(d)}).catch(function(err){console.log(err);});

// // // Same as above  // ek time pe ek hi chalegi either then(resolve) or catch(reject)
// // p1.then(function (d){
// //     console.log(d);
// // }).catch(function(err){
// //     console.log(err);
// // });



// // ----------------------------------------------
// // Promise : It is a constructor function which accepts call back function and call back function takes two arguement(resolve and reject)
// let p1 = new Promise(function (resolve,reject){
//     let data = "hi I am resolved data";
//     let data2 = "hi I am rejected data";
//     // resolve(data); // resolve and reject dono hai to jo pahle hua wo chalega
//     reject(data2);
//     console.log("Pahle bhi main tumse mila hoon") // Ye pahle chalega promise baad me chalega (because waade late se poore hote)
// });

// // Same as above  // ek time pe ek hi chalegi either then(resolve) or catch(reject)
// p1.then(function (d){
//     console.log(d);
// }).catch(function(err){
//     console.log(err);
// });


// ************************** Instagram using promises (We generally use this topic for same not call-back hell)