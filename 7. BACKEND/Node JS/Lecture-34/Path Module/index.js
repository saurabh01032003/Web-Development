
// path is a module
let path = require('path');
console.log(path); // ek bada sa object

// let str = path.join('saurabh','mishra','is', 'a','good','gye');
// console.log(str); // saurabh\mishra\is\a\good\gye (output)

// ----------------------------------------------------------------

let str = path.join('saurabh////','////mishra','is///', 'a////','good/////','gye');
// removes extra slaces(forward) from path
console.log(str); // output : saurabh\mishra\is\a\good\gye 
