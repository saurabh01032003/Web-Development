// function can be passed as arguement 

// 1. Functions which accepts some other function as an arguement -> a(are called higher order functions)
// function a(x){ // x is a function b
//     x(); // function b is called
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



// -------------------------------------------------------------------------------------------
// What are call back functions ?

// ****** When we pass a function(b) as an arguement to HOF (Not HOF)

//***** Whent we pass a funciton(b) as an arguenment to HOF and mandatory to call that (b) function inside  (a);
// function a(x){
//     console.log(x);
//     x();

//     console.log("I am inside a func");
// }

// function b(){
//     console.log("I am inside the b func");
// }

// a(b);



// Question 

// let arr = [10,20,true,30, "Sam",40, false];

// let num = [];
// let str = [];
// let bol = [];


// // for(let i = 0;i < arr.length;i++)
// for(let item of arr)
// {
//     if(typeof item === "number"){
//         num.push(item)
//     }else if(typeof item == "string"){
//         str.push(item)
//     }else{
//         bol.push(item);
//     }
// }
// console.log("Numbers are : ")
// for(let i = 0;i < num.length;i++){
//     console.log(num[i])
// }

// console.log("Strings are : ")
// for(let i = 0;i < str.length;i++){
//     console.log(str[i])
// }

// console.log("Boolean values are : ")
// for(let i = 0;i < bol.length;i++){
//     console.log(bol[i])
// }


// ----------------------Above Question using HOF

let arr = [10,"saurabh", "sushant",true,30,40, false, "Lol"]

function checkString(item){
    return typeof item === "string";
}

function checkNumber(item){
    return typeof item === "number";
}

function checkBoolean(item){
    return typeof item === "boolean";
}

function check(arr,fun){
    let result = [];
    for(let item of arr){
        if(fun(item)){
            result.push(item);
        }
    }
    return result;
}

console.log(check(arr,checkString));
console.log(check(arr,checkNumber));
console.log(check(arr,checkBoolean));