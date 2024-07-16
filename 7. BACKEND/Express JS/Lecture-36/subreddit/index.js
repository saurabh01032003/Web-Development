
let express = require('express');
let app = express();

// app.get('/',(res,req)=>{
//     res.setEncoding('root route hai');
// })

// app.get('/r/banana',(req,res)=>{
//     res.send('banana route hai');
// })

// app.get('/r/orange',(req,res)=>{
//     res.send('orange route hai');
// })

// app.get('/r/cat',(req,res)=>{
//     res.send('Cat route hai');
// })

// // hum cat,orange, banana ki jagah kuch bhi search kar sakte -> aise to fir infinite route banane pad sakte : PROBLEM HAI YE TOH


// -------- Solve above problem => subreddit

app.get('/r/:subreddit',(req,res)=>{
    console.log(req.params); // object

    // let {subreddit} = req.params; // destructure
    // res.send(`<h2>My route is ${subreddit}</h2>`)
    //  or

    let val = req.params.subreddit;
    res.send(`<h2>My route is ${val}</h2>`)
});


app.listen(8080,()=>{
    console.log('server running at port 8080');
})