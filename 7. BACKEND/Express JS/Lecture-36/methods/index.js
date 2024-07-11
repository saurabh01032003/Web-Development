

const express = require('express'); //funcn
const app = express(); //object or instance


// get

app.get('/' , (req,res)=>{ //path , cb   //root or default path-> '/'
    res.send('<h3> ye mera "/" path hai </h3>')
}) 

app.get('/cat' , (req,res)=>{ //path , cb
    res.send('<h3> ye mera "/cat" path hai </h3>')
}) 

app.get('/dog' , (req,res)=>{ //path , cb
    res.send('<h3> ye mera "/dog" path hai </h3>')
}) 


app.get('/orange' , (req,res)=>{ //path , cb
    res.send('<h3> ye mera "/orange" path hai </h3>')
}) 

app.get('/watermelon' , (req,res)=>{ //path , cb
    res.send('<h3>Watermelon wala request hai</h3>')
}) 

//bad request ko handle //--> always at the last
app.get('*' , (req,res)=>{
    res.send("<h2> default path hai in order to handle bad request </h2>")
})


app.listen(8080 , ()=>{
    console.log("server connected at port 8080")
})