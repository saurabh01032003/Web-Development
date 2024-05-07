// Some More Array Methods
// let arr = [10,20,30,40,50];

// // // // // -------------------------------------------------------

// // // // // 1. forEach => accepts a call back function => 2 (item,index)

// // // // // -> It does not return anything
// let ans = arr.forEach(function (item,index){
//     console.log(item,index);
// });

// console.log(ans); // function don't return anything that means undefined is returned


// --------------------------------------------------------------
// 2. map() => arr.map() => accepts a call back function => 2(item,index)
// => it returns new array (with the same length as initial array)

// let arr = [10,20,30,40,50];

// let newArray = arr.map(function(item,index){
//     return item + item;
// });

// console.log(arr);
// console.log(newArray);


// --------------------------------------------------------------------------
// // 3. filter() => arr.filter() => accepts a call back function => 2(item,index)
// // => it returns new array (with no length restriction)
// // => truethy value ko hi return krega in new array

// let arr = [10,20,30,40,50];

// let newFilteredArray = arr.filter(function (item, index) {
//     if(item > 20){
//         return true;
//     }
// });
// console.log(arr);
// console.log(newFilteredArray);

// --------------------------------------------------------------------------------------
// 4. find() => arr.find() -> returns found element


// let arr = [10,20,30,40,50];
// let foundElement = arr.find(function(item,index){
//     if(item === 30){
//         return item;
//     }

//     // if(item === 6){
//     //     return item;
//     // }

//     // since' array me 6 nahi mila to yaha aaya and returned undefined;
    
// });
// console.log(foundElement);


// 5. sort()
let arr = [1,11,100000,4,30,23];
let returnedVal = arr.sort(); // firstly converts array elements into string than sort them lexicographically
let ascArr = arr.sort(function compare(a,b){
    return a-b;
});
console.log(returnedVal); 
console.log(ascArr); 

// 5. reduce() : Home-Work
// let arr = [10,20,30,40,50];
// let sum = arr.reduce(function(accumulator,curr){
//     return accumulator + curr; // prev-> will be storing calculated values,curr will be moving from idx1 till last

// },20); // 20 is stored initially in sum, and curr will move from index 0 till the end
// console.log(sum);




