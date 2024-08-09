const mongoose = require("mongoose");
// Database Connection
mongoose.connect("mongodb://127.0.0.1:27017/mydb1")
.then(()=>{ 
    console.log("DB connected successfully")
})
.catch((err)=>{
    console.log("DB not connected ! Errror occured")
    console.log(err);
})


// Schema (blue-print) : Helps in mapping of data (ki kon sa data kis type ka hoga)
let moviesSchema = new mongoose.Schema({
    movieName : String,
    rating : Number,
    releaseYear: Number,
    isWatched : Boolean
})

// Model(js class)
// Model returns a class / model is a class
// Model hamesha singular hoga
// Model 1st letter always capital hoga

const Movie = mongoose.model('Movie',moviesSchema); // do argument liye : pahla => model ka naam, dusra => kis schema ki help se model bana rahe
// console.log(Movie)

const ironman = new Movie({ // creates a new object using (model == js class)
    movieName:"Iron-man",
    rating:8,
    releaseYear: 2015,
    isWatched : true
})

// Ek entry Model me chali gayi -> Now your db (mydb1) is not empty => you will see this db now => on typing show dbs; in cmd

// ironman.save(); // this will store ironman object inside db permanently
// ek baar save karke comment kardo nahi toh baar baar save hoyegi 

Movie.create({
    movieName:"Spiderman",
    rating:7,
    releaseYear:2016,
    isWatched: false
})