
// let arr = [10, 20, 40, "Samarth", true, undefined, null]

// console.log(arr)

// console.log(arr[3])

// let arr1 = [10,20,[100,[20001,20002,20003],300], "Samarth", null, false];
// console.log(arr1[2][1][1])


// ---------------------Array Methods

let arr = [10,20,30,40,50];

// ***********************arr.push()
let p = arr.push(80,60,70) // return the length after pushing value
console.log(p)
console.log(arr)


// // ***************************arr.pop()-> delete last element and returns last element
// arr.pop();
let returned_val = arr.pop();

console.log(returned_val)
console.log(arr)


// // ****************************Shift -> removes 1st element from arr
let x = arr.shift() // takes no arguement
console.log(x)
console.log(arr)


// // // Unshift -> adding at start of array
let m = arr.unshift(40,50,60)
console.log(arr)
console.log(m)
