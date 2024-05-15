// Js is -> synchronous(jb tak ek kaam khatm nahi ho jata dushra shuru nahi hoga,in some order), weekly , dynamically , interpreted, multithreaded

// Some inbuilt methods of Browsers(Web APIs)

// Javascript is synchronous but it shows asynchronous behaviour due to Web APIs.(e.g SetTimeout(),setInterval(),clearInterval(),fetch(),console,time)

// Web APIs-> Super Powers of browsers(best friend of Js)

// console.log("start");
// console.log("Run after 2sec");
// console.log("end");

// Isko karne se output ka order change nahi hoga

//--------------------------

// console.log("start");
// setTimeout(function(){
//     console.log("Wait for 4 sec");
// },4000); // this statement will execute after 4 sec
// console.log("End");

// // --------------------------

// console.log("start");

// setTimeout(() => {
//     console.log("run after 4 sec");
// },4000); // wait for 4 sec

// setTimeout(() => {
//     console.log("run after 2 sec");
// },2000);

// console.log("End");
// // Event Loop : It constantly check call stack , if call stack becomes empty than it do the work provided by call back queue by pushing it into call stack(to run)


// ------------------------------------------------
// Interview question

// console.log("start");

// setTimeout(function(){
//     console.log("hello my friend");
// },0); // this will be present in call back queue till call stack becomes empty, call stack becomes empty when "End"(line:39) will be printed

// console.log("End"); 

/* output will be : start
                    End
                    hello my friend (it means pahle call stack empty hoga phir event loop se value aayegi in call stack)
*/

//---------------------------------
// 2nd arguement of setTimeout is time in ms

console.log("start");

setTimeout(function(){
    console.log("hello my frnds 2");
},0); // this will be present in call back queue till call stack becomes empty, call stack becomes empty when "End"(line:39) will be printed

setTimeout(function(){
    console.log("hello my frnds 1");
},4000);

console.log("End");

