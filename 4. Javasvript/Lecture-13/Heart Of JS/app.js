// // // Role of a function to return something(i.e return-type)

// // // Syntax

// // // Function Definition

// // // function name_function(){   
// // // }

// // // Function Call
// // // name_function();


function saurabh(){
    console.log("Main whi hoon, Jise kabhi chaha tha aapne");
}

saurabh();
let output = saurabh();
// // i.e output me "undefinded" stored hai

// // When nothing is returned from a function by default undefined(premitive datatype) is returned
console.log(output);


// // // // -------------------Sum of two Numbers
// function sum(num1,num2){
//     return num1+num2;
// }

// let x = sum(3,4);
// console.log(x);
// console.log(sum(5,6));


//******************* */ Default parameterised function

// // When we have all arguements for all parameters than default value is not considered
// function sum(num1,num2,num3=30){
//     return num1+num2+num3;
// }

// console.log(sum(5,6));
// console.log(sum(5,6,10));


// function sum(num1,num2,num3){
//     // num3 : Since, num3 is not declared so it's type is undefined
//     console.log(typeof num3)
//     let x = num1+num2+num3;
//     console.log(x);// NaN

// }

// console.log(sum(5,6)) // undefined


// function sum(num1,num2,num3){
//         // num3 : Since, num3 is not declared so it's type is undefined
//         console.log(typeof num3)
//         let x = num1+num2+num3;
//         console.log(x);
//         console.log(typeof x);
    
// }
    
//     console.log(sum("a","b")) // undefined