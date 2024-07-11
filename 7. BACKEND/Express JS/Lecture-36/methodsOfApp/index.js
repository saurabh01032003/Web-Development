

//express is used for making servers
const express = require('express');

const app = express(); // returns an object

// adding app.use
// https://expressjs.com/en/4x/api.html#app.use  : Official Documentation
// app.use([path,] callback [, callback...]) // path is optional as it is inside square-bracket

// // without path i.e for all incoming requests
// app.use((req,res) =>{ // jitni baar tum request send karoge utni baar ye call back function chalega

//     // console.log(req); // an object
//     // console.log(res); // an object
//     console.log("you made a request"); // jab jab request vejoge tab tab ye console hoga
//     res.send('<h1>Mummy meri shadi kardo may june july me</h1>') // response yhi chaiye hame server se on each request
// })

// with path i.e for spcific path only and not in other cases
app.use( '/myself' , (req , res)=>{ //middleware function //accepts a callback function
    // console.log(req);
    // console.log(res);
    console.log('you made a request at specific path myself');
    res.send('<h1>horn ok please</h1>')
})


app.listen(8080,()=>{
    console.log('server connected at port 8080');
})