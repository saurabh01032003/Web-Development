// Ache se backend me karenge isko  
// async function hello(){
//     // return 10; // asynch returns a promise with value 10, (if nothing is returned in function a promise with undefined value will be returned)
//     return 20;

// }

// console.log(hello());
// hello().then(
//     function(d){ // simmilar to resolve, arguement is value returned
//     console.log(d);
// });

// await ka matlab hai jabtak right side ki equation puri nahi 

// async : function ke andar jane dega
// await : always used inside async function , and waits for some time, && javascript wait nahi karta so niche ke part skip ho jayenge(within same function)



//======================================
// function helloPulkitBhaiya() {}

// console.log(helloPulkitBhaiya());

// // --------

// function helloPulkitBhaiya() {}

// console.log(new helloPulkitBhaiya()); // object : Constructor function creates object

// --------

// async function helloPulkitBhaiya() {
//   return 10;
// }

// console.log(helloPulkitBhaiya());
// helloPulkitBhaiya().then(
//     function (d) {
//   console.log(d);
// });

// -----------

// async function sam(a, b, c) {
//   console.log(10);
//   //   let ans = fetch("https://api.tvmaze.com/search/shows?q=girls");
//   let ans = await fetch("https://api.tvmaze.com/search/shows?q=girls");
//   console.log(20);
//   console.log(ans);
// }

// sam(10, 20, 30);

// ----------

// async function a() {
//   let out = await fetch("https://api.tvmaze.com/search/shows?q=girls");
//   console.log("start");
//   console.log(out);
//   console.log("end");
// }

// function b() {
//   console.log(10);
//   console.log(20);
// }

// a();
// b();

// -----------

// async function a() {
//   console.log("start");
//   console.log(out);
//   //   let out = await fetch("https://api.tvmaze.com/search/shows?q=girls");
//   console.log(out);
//   console.log("end");
// }
// function b() {
//   console.log(10);
//   console.log(20);
// }

// a();
// b();

// --------------

// async function a() {
//   console.log("start");
//   console.log(out);
//   let out = await fetch("https://api.tvmaze.com/search/shows?q=girls");
//   console.log(out);
//   console.log("end");
// }
// async function b() {
//   console.log(10);
//   console.log(20);
// }

// a();
// b();

// --------

// async function a() {
//   console.log("start");
//   let out = await fetch("https://api.tvmaze.com/search/shows?q=girls");
//   console.log(out);
//   console.log("end");
// }
// async function b() {
//   console.log(10);
//   await fetch("https://api.tvmaze.com/search/shows?q=girls");
//   console.log(20);
// }

// a();
// console.log(1000);
// b();
// console.log(2000);












// ------------

// async function a() {
//     console.log("start");
//     let out = await fetch("https://api.tvmaze.com/search/shows?q=girls");
//     console.log(out);
//     console.log("end");
//   }
//   async function b() {
//     console.log(10);
//     fetch("https://api.tvmaze.com/search/shows?q=girls");
//     console.log(20);
//   }
  
//   a();
//   console.log(1000);
//   b();
//   console.log(2000);


// async function a(){
//     console.log("start");
//     let out = await fetch("some link") // yaha wait karega iske wajah se niche ka part of same scope skip ho jayega and queue me lag jayega
//     console.log(out);
//     console.log("end");
// }
// a();

// async function b(){
//     console.log(10);
//     fetch("Some links") // yaha wait nahi karega
//     console.log(20)
// }

// a();
// console.log(1000);
// b();
// console.log(2000);


// -------------------
// async function myDisplay() {
//     let myPromise = new Promise(function (resolve, reject) {
//         resolve("I love You !!");
//     });

//     myPromise.then(function(argum){
//         console.log(`${argum}`);
//     });

//     let p = new Promise(function (resolve, reject) {
//         console.log('Kya hua meri jaan');
//     });
// }
// myDisplay();


