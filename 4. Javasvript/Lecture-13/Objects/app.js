// // // Object : everything inside js is objects
// // // definition : Object : are combination of properties (properties are collection of key & value pairs)

// let person = {
//     // properties -> key : value pair
//     naam : "Pulkit Bhaiya", 
//     age : 16, 
//     favColor: "Orange",
//     salary: 100000, 
//     isMarried: "aneko se", // last property ke baad coma lagana is not necessary
// }

// console.log(person);

// //------------------ dot operator
// console.log(person.age); // person ki age will be printed

// console.log(person.naam); // person ki age will be printed

// //------------------- alternate way to find 
// // all "keys" are typecasted into string , than stored 
// console.log(person["naam"]); // person ki age will be printed


// // ---------------------------------------------------------
let person = {
    // properties -> key : value pair
    naam : "Pulkit Bhaiya", 
    age : 16, 
    favColor: "Orange",
}
console.log(person);


//**************** */ change property of person
person.age = 20;
person["naam"] = "saurabh";
console.log(person);

// // *************** add new property
person.isMarried = false;
console.log(person);


// // *********************** delete property 
delete person.favColor;
console.log(person);


// // ****************If you want that nobody will change any property in your object
// Object.freeze(person);
// person.weight = 30; //  No insertion will occur now
// person.height = 40;

// // // The above features are not added in your property
// console.log(person);