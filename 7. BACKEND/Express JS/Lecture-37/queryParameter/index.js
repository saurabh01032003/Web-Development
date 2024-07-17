
const express = require('express'); // server express hi banata hai
const app = express(); // obj or instance

app.listen(8080,()=>{
    console.log("Server chal gaya at port 8080");
})

app.get('/water',(req,res)=>{
    console.log("RAM");
    // res.send(req.query); // object : {water : ram shyam}
    res.send(req.query.water); // value corrosponding to key water = ram shyam

    // let {water} = req.query; // destructure
    // res.send(water);
});
