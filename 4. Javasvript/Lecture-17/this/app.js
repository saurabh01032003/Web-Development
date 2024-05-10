// this-keyword

//everything inside JS IS an object

//this always points to the object ❌

// -----
//how many types of this do we have? => 5

// -------Bible/granth/kuraan-------
//this depends on how it is being called upon
// ---------------------------------

// 1. function invokation ✅
// 2. method invokation ✅
// 3. constructor invokation ✅
// -----
// 4, indriect calling (call() , bind() , apply(  ))
// 5. arrow functions

// ---------------------------------------------

// 1. direct functional invokation -> always points to the window object
// function sam() {
//   console.log(this); // this : here points to Window Object
// }
// sam(); // Whenever we run a js code, a global execution context is created(along with it a global object is also created known as Window object)


// // 2. method invokation => always points to the obj inside which method is defined
// let obj = {
//   a: 10,
//   b: 30,
//   fn: function () {
//     console.log(this); 
//   }, 
// };

// obj.fn();// this is pointing to object(obj)
// let naam = obj.fn;
// naam(); // Simple function calling So' here, this points to window object

// ----------------

// let obj = {
//   a: 10,
//   b: 30,
//   fn: function () {

//     console.log(this);
//   },
// };
// obj.fn();

// ----------------

let obj = {
    a: 10,
    b: 30,
    fn: function () {//obj (object calling ke wajah se ye funtion run hua)
        console.log(this);
        let a = function () { // function invocation se ye function run hua hai
            console.log(this); //window (because here, this is run due to function invocation i.e calling a())
        };
        a(); // function invocation
    },
};
obj.fn();

// ------------

// let obj = {
//   naam: "samarth",
//   umar: 34,
//   fn: function () {
//     console.log(this);
//   },
// };

// obj.fn();
// let ans = obj.fn;

// ans();

// ----------------

// 3. constructor invokation => always points to the newly created object

function Sam(dog, umar) {
    this.naam = dog;
    this.age = umar;
}

let person1 = new Sam("maverick", 2);
// this inside sam refers to person1(newly created object)
let person2 = new Sam("bruno", 5);
// this inside sam refers to person2(newly created object)

console.log(person1);