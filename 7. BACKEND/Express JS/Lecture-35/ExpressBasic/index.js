
const express = require('express'); // returns a function
const app = express(); // returns an object

// console.log(app); // object will be printed

// ask server to listen to your requests
app.listen(8080,()=>{console.log("Server connected at port 8080")});

// app.listen(8080) // without call back function -> type : "localhost:8080" on your browser and another "localhost:2000" you will see difference as "localhost:2000" will give 'This site can't be reached' while other will show a blank page  

