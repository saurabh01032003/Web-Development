// let arr1 = [10,20,30,40];
// let arr2 = [50,60,70];
 

// // --------- concat 
// let arr3 = arr1.concat(arr2);
// console.log(arr3);

// // // --------spread Operator -> modern way to concat

// // // arr1 ke piche arr2 ko concatenate kara gaya hai
// // arr1 = [10,20,30,40,...arr2];
// // console.log(arr1);

// // arr2 ke aage arr1 ko concatenate kara gaya hai
// arr2 = [...arr1,50,60,70];
// console.log(arr2);


// // ----------- spread Operator in object
let obj = {
    l : 10,
    m : 'Saur',
    n : 'live-class',
}
// delete obj.l; // obj se l property delete ho jayegi
console.log(obj);

let obj2 = {
    age: 27,
    ...obj,
} 

console.log(obj2);

// // why ? we use spread operator

// let arr1 = [11,18,4,5,6,7,8,9];

// console.log(Math.min(arr1)); // NaN 
// console.log(Math.min(...arr1)); // we get output
// console.log(Math.max(...arr1));