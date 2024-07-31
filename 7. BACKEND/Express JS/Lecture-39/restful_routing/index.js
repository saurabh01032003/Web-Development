
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended : true}))


// dummy array instead of DB
let comments = [
    {
        id :0,
        username : "Aarab",
        comment: 'kuch bhi'
    },
    {
        id :1,
        username : "Sam",
        comment: 'Hn hn main whi hoon'
    },
    {
        id :2,
        username : "Sush",
        comment: 'Ram Jane'
    },
    {
        id : 3,
        username : "Ishan",
        comment: 'Comeback hi nahi ho raha'
    }
]




app.get('/',(req,res)=>{
    res.send("root route mei appka swagat hai");
})


// Task: 1 ==> Display all the blogs 
app.get('/blogs',(req,res)=>{
    res.render('index',{comments});
})

// Task: 2 ==>  show(sirf dikhana hai) just a "FORM" for adding a new blog
app.get('/blogs/new',(req,res)=>{
    res.render('new');
})

// Task: 3 ==> to actully add a blog in the DB(here array)
app.post('/blogs',(req,res)=>{
    // data form(new.ejs wala form) submit karne pe req.body me milega
    let {username, comment} = req.body;
    console.log(req.body);

    // Ab hum form ke data ko apne db(array here) me push kar denge
    comments.push({username,comment,id:comments.length}) // you have to evaluate id by yourself(arr.length or arr.length+1(if id started from 1))

    // redirect now(/blogs wale route pe la do ab: to see wheter new object is added in our blogs list or not)
    res.redirect('/blogs'); // jis path pe redirect karna hai(get request ja rahi hai)
})


// Task: 4 ==> To show information about one particular blog
app.get('/blogs/:id',(req,res) =>{ // subreddit wali chiz yaad karo
    let {id} = req.params;
    let foundComment = comments.find(comment => comment.id == id) // typecasting (kyonki parems are in string)
    res.render('show',{foundComment});

})


app.listen(8080,()=>{
    console.log('server connected at port 8080');
})