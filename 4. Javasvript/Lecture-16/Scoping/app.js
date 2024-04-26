// --------------Most Important in Interviews
// for(var i = 0;i <= 5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },1000);
// }


// // for(let i = 0;i <= 5;i++){
// //     setTimeout(function(){
// //         console.log(i);
// //     },1000);
// // }


// ---------------------------------------------------------
var x = 10;
let y = 20;

function sam(){
    let x = 1000;
    var y = 2000;
    console.log(x);
    console.log(y);
}

// var ka functional scope hota hai to var nayi banegi functional me,(else global) 
// let ka block scope hota hai toh let nayi banegi block me(else script -> same as global)
console.log(x);
console.log(y);