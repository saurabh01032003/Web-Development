// Js is -> synchronous(jb tak ek kaam khatm nahi ho jata dushra shuru nahi hoga), weekly , dynamically , interpreted, multithreaded

// Some inbuilt methods of Browsers(Web APIs)

// Javascript is synchronous but it shows asynchronous behaviour due to Web APIs.(e.g SetTimeout(),setInterval(),clearInterval(),fetch(),console,time)

// Web APIs-> Super Powers of browsers(best friend of Js)


// console.log("start");

// setTimeout(() => {
//     console.log("run after 4 sec");
// },4000);

// setTimeout(() => {
//     console.log("run after 2 sec");
// },2000);

// // Event Loop : It constantly check call stack , if call stack becomes empty than it do the work provided by call back queue by pushing it into call stack(to run)

// console.log("End");


// ------------------------------------------------
// Interview question
// 2nd arguement of setTimeout is time in ms

console.log("start");

setTimeout(function(){
    console.log("hello my frnds 2");
},0); // this will be present in call back queue till call stack becomes empty, call stack becomes empty when "End"(line:39) will be printed

setTimeout(function(){
    console.log("hello my frnds 1");
},4000);

console.log("End");

// 
