const express = require('express');
const app = express();
const session = require('express-session');

// middleware to use session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
//   cookie: { secure: true }
}))

app.get('/viewcount',(req,res)=>{
    if(req.session.count){
        req.session.count += 1; // jab jb site pe visit karoge(browser refresh karke dekh lo) tb-tb count increase hogi
    }else{
        req.session.count = 1; // server band krne pr count ek se start ho jayegi phir 
    }
    res.send(`you visited the site ${req.session.count} time`)
})

app.get('/setname',(req,res)=>{
    req.session.username = 'samarth vohra';
    res.redirect('/greet');
})

app.get('/greet',(req,res)=>{
    // bina setname wale route ko chalaye '/greet' route chalaoge to anonymous aayega username me 
    let {username = "anonymous"} = req.session;
    res.send(`hi from ${username}`);
})

app.get('/',(req,res)=>{
    res.send('Welcome to session');
})

app.listen(8080,()=>{
    console.log('server connected');
})