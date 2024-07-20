
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'/views'));

// express se permission lo ki mujhe static files use karne hai
app.use(express.static(path.join(__dirname,'public'))); // app.use() -> middlewere (har incoming request pe chalega)


app.get('/',(req,res)=>{
    res.render('index');
})

app.listen(8080,()=>{
    console.log("Successfully connected at port 8080");
})