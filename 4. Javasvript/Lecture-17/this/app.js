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

// let obj = {
//     a: 10,
//     b: 30,
//     fn: function () {//obj (object calling ke wajah se ye funtion run hua)
//         console.log(this);
//         let a = function () { // function invocation se ye function run hua hai
//             console.log(this); //window (because here, this is run due to function invocation i.e calling a())
//         };
//         a(); // function invocation
//     },
// };
// obj.fn();

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

// function Sam(dog, umar) {
//     this.naam = dog;
//     this.age = umar;
//     console.log(this);
// }

// let person1 = new Sam("maverick", 2);
// // this inside sam refers to person1(newly created object)
// let person2 = new Sam("bruno", 5);
// this inside sam refers to person2(newly created object)

// console.log(person1);

// 4.) indirect calling (call() , bind() , apply(  ))

//***********************  .call()
// let obj1 = {
//     a : 20,
//     name : "Sushant",
//     fn : function(){
//         console.log(this);
//     },
// }
// let obj2 = {
//     b : 50,
//     email : 'saurabh@gmail.com',
// }
// // In case of Call method :  call method ke andar present argument ko this point karega alwaya
// obj1.fn.call(obj2); // {Points to obj2}-> We are calling obj1.fn-> from obj2(reference badal gaya)
// obj1.fn.call(obj1);


// let obj1 = {
//     a : 20,
//     name : "Sushant",
//     fn : function(a,b,c){
//         console.log(this,a,b,c);
//     },
// }
// let obj2 = {
//     b : 50,
//     email : 'saurabh@gmail.com',
// }

// // In case of Call method :  call method ke andar present argument ko this point karega alwaya
// // obj1.fn.call(obj2,1,2,3); // {Points to obj2}-> We are calling obj1.fn-> from obj2(reference badal gaya)
// // obj1.fn.call(obj1,1,2,3); // {Points to obj2}-> We are calling obj1.fn-> from obj2(reference badal gaya)

// let x = obj1.fn.bind(obj2,1,2,3);
// x();
// let y = obj1.fn.bind(obj1,1,2,3);
// y();


// //***********************  .apply()

// // obj1.fn.apply(obj1);// a,b,c function ka arg nahi veja to undefined chala gaya ushme // obj1 ke andar se obj1.fn call hua -> hence' this will point to obj1(andar arg)

// // obj2 ke andar se obj1.fn call hua -> hence this will point to obj2(andar in arg)
// obj1.fn.apply(obj2,[1,2,3]);// apply ke case me hum arguments ko array me pass karte hai , naki comma separated


// ****************** .bind()
// let obj3 = {
//     num : 3,
//     email : 'sam@gmail.com',
//     fn : function(){
//         console.log(this);
//     },
// }

// let obj4 = {
//     name : 'sush',
//     age : 22,
//     gender: 'M',
// }
// let x = obj3.fn.bind(obj3) // you have fixed reference of obj3.fn(obj3 ke andar ke function) ka reference to obj3, now this here will always points to obj3, irrespective of invocation
// x();

// let x = obj3.fn.bind(obj4); // obj3 ke function ka reference bind kardiya obj4 se ,So' now this of obj3 points to obj4
// x();