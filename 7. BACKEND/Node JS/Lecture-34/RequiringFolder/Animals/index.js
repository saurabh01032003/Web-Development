
// special file i.e index.js for folders (name must be index.js nothing else -> by default)

let dog = require('./dogs');
let cat = require('./cats');

// by default empty object export hota  if nothing is exported

module.exports = {dog,cat};

// module.exports = "Hi Saurabh Why are you so depressed"; // string export kr raha
