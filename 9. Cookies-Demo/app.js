const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

// middleware to use cookies
// app.use(cookieParser()); 

app.use(cookieParser('anyStringyoucanpasshere')); // for signed cookies

app.get('/',(req,res)=>{
    // console.log(req.cookies);
    // res.send(req.cookies); // all easy cookies
    res.send(req.signedCookies); // only signed cookies
})

// ------Signed cookies
app.get('/getsignedCookies',(req,res)=>{
    res.cookie('bank-balance','250 crore', {signed:true}); // this cookies will not seen in application part after inspecting
    res.send('cookies sent successfully');
})


// ----------------For any cookie

// // Pahle cookie set karenge : baad me get 
// app.get('/setcookie',(req,res)=>{
//     // cookie ki key value pair server(res) vejega-> wo client side(req) pr store hoga
//     res.cookie('name','Saurabh');
//     res.cookie('age','22');
//     res.cookie('gender','male');

//     res.send('Server sent you cookie');
// })


// // Note: Cookies are not secure -> koi bhi inspect karke cookie me change kar sakta => So we have signedCookies (secure slightly)
// app.get('/getcookies',(req,res)=>{
//     let {name,age,gender} = req.cookies; // client(req)  side me milega
//     res.send(`name is ${name}, age is ${age}, gender is ${gender}`);
// })

app.listen(8080,()=>{
    console.log("server connected at port 8080")
})