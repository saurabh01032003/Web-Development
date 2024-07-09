// https://www.npmjs.com/package/figlet
// https://www.npmjs.com/package/colors

const figlet = require("figlet");
const color = require('colors');

figlet("Saurabh Anushka", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data.rainbow); // due to installing multiple packages (figlet and colors)
});



