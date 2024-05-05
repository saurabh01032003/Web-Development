// // Q.) You are given an array containing different types of elements, seperate elements based on their datatypes i.e string , number, boolean

// function checkNumber(arr) {
//   let result = []; // initialise an empty array
//   for (let item of arr) {
//     if (typeof item === "number") {
//       result.push(item);
//     }
//   }
//   return result;
// }

// function checkString() {
//   let result = [];
//   for (let item of arr) {
//     if (typeof item === "string") {
//       result.push(item);
//     }
//   }
//   return result;
// }

// function checkBoolean() {
//   let result = [];
//   for (let item of arr) {
//     if (typeof item === "boolean") {
//       result.push(item);
//     }
//   }
//   return result;
// }

// let arr = [10, "sam", "vohra", true, 30, 40, false, "lol"];
// console.log(checkNumber(arr));
// console.log(checkString(arr));
// console.log(checkBoolean(arr));

// // USING HOF------------------------------------------------------

function checkBoolean(item) {
    return typeof item === "boolean";
}

function checkNumber(item) {
    return typeof item === "number";
}

function checkString(item) {
    return typeof item === "string";
}

function check(arr, fn) {
    let result = [];
    for (let item of arr) {
        if (fn(item)) {
            result.push(item);
        }
    }
    return result;
}

let arr = [10, "sam", "vohra", true, 30, 40, false, "lol"];
console.log(check(arr, checkString));
console.log(check(arr, checkNumber));
console.log(check(arr, checkBoolean));


// **********************************************************************************************************************************************
// function findString(arr){
//     let str = [];
//     for(let item of arr){
//         if(typeof item === 'string'){
//             str.push(item);
//         }
//     }
//     return str;
// }

// function findNumber(arr){
//     let str = [];
//     for(let item of arr){
//         if(typeof item === 'number'){
//             str.push(item);
//         }
//     }
//     return str;
// }

// function findBoolean(arr){
//     let str = [];
//     for(let item of arr){
//         if(typeof item === 'boolean'){
//             str.push(item);
//         }
//     }
//     return str;
// }
// let arr = [10, "sam", "vohra", true, 30, 40, false, "lol"];
// console.log(findString(arr))
// console.log(findNumber(arr))
// console.log(findBoolean(arr))

// --------------USING HOF
// function checkNumber(item){
//     return typeof item === 'number';
// }
// function checkString(item){
//     return typeof item === 'string';
// }

// function checkBoolean(item){
//     return typeof item === "boolean"
// }

// function seperateAllTypes(arr,fn){
//     let temp = [];
//     for(let item of arr){
//         if(fn(item)){
//             temp.push(item);
//         }
//     }
//     return temp;
// }

// let arr = [10, "sam", "vohra", true, 30, 40, false, "lol"];
// console.log(seperateAllTypes(arr,checkBoolean))
// console.log(seperateAllTypes(arr,checkNumber))
// console.log(seperateAllTypes(arr,checkString))
