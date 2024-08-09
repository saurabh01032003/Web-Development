const mongoose = require("mongoose");
// Database Connection
mongoose.connect("mongodb://127.0.0.1:27017/mydb1")
.then(()=>{ 
    console.log("DB connected successfully")
})
.catch((err)=>{
    console.log("DB not connected")
    console.log(err);
})
