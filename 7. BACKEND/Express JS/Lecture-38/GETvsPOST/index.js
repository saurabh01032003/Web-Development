
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

app.use(express.json()); // for json data
app.use(express.urlencoded({ extended: true })) // middlewere to get the form data
 
app.get('/',(req,res) =>{
    res.render('index'); // index.ejs  inside views folder
})


// GET request ko handle kar raha
// app.get('/user',(req,res)=>{
//     let {keyNameBind,keyAgeBind} = req.query; // destructure
//     console.log(`Name : ${keyNameBind}  Age : ${keyAgeBind}`);
//     res.send("GET request sent successfully");
// })

// POST request handle kr rha
app.post('/user',(req,res)=>{
// req.body : Contains key-value pairs of data submitted in the request body. By default, it is undefined, and is populated when you use body-parsing middleware such as express.json() [for json data] or express.urlencoded() ->[for form data].
    console.log(req.body);
    res.send('POST request sent successfully');
})

app.listen(8080,()=>{
    console.log("server connected at port 8080");
})