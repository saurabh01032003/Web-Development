
const express = require('express');
const app = express();
const path = require('path'); // module automatically installed with nodejs

// https://expressjs.com/en/4x/api.html#app.set

app.set('view engine' , 'ejs') // view engine ko set kardiya hai taaki aap template dekh pao 

// better way -> render ko views ke folder tak ka path pata hai 
app.set('views',path.join(__dirname,'views')); // views ko chalane ke liye hum kahi se chala paye iske liye set kara hai aise nahi toh by default "process.cwd() + '/views' " hota hai 
                                                // jiske karan aap sirf ek level pahle se apna template run kar sakte i.e lecture-37/ejsTemplate/views> -> ejsTemplate wale folder se sirf run kar sakte default behaviour ke karan -> samjhe -> ab hum kisi bhi level se run kara sakte apne .ejs file ko due to ""

// root route
app.get('/',(req,res)=>{
    // res.send('HI');
    res.render('index.ejs'); // file inside views directory jo ki hame dekhna hai (render ko views ke folder tak ka path pata hai )
})

// random route
app.get('/random',(req,res)=>{
    let number = Math.floor(Math.random()*100);
    res.render('random',{number}); // number ko hum ejs file me use karna chahte hai isliye 2nd argument me as an object send karenge

})

let todos = ['fresh ho jao','gym chale jao','khana kha lo', 'office jao','so joo'];
// todo list route
app.get('/todo',(req,res)=>{
    let num = Math.floor(Math.random()*10);
    res.render('todos.ejs',{todos,num});
})

app.listen(8080,()=>{
    console.log('connected to port 8080');
})