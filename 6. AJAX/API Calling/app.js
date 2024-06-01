// -------------Method 1 : 

// const req = new XMLHttpRequest()


// // console.log(req);

// // console.log(req.onload);
// // console.log(req.error);

// // ------------------------

// req.open('GET','https://api.tvmaze.com/singlesearch/shows?q=girls'); // to create a link between client and endpoint (think client as remote && endpoint in server)
// req.send(); // remote ka button daba diya

// // console.log(req);

// // onerror is property of object req, but here it is acting like eventListener
// req.onerror = function(res){ // api ki data aayi hai in arguement, jo send hui thi pahle wo aayi
//     console.log(res,"error");
// }

// req.onload = function(res){ 
//     console.log(res,"load");
// }

// ------------------------2. fetch -> webapi -> returns a promise 

// let res = fetch('https://api.tvmaze.com/singlesearch/shows?q=batman');

// // console.log(res);

// res.then((function(data){
//     console.log(data);
//     // console.log(data.json());
// })).catch(
    
// )


// ------------------------------3. Axios

let req = axios.get('https://api.tvmaze.com/singlesearch/shows?q=batman'); // returns promise

req.then(function(res){
    console.log(res.data); // we get complete data not like fetch which gives us meta data 
})
.catch(function(err){
    console.log("err");
})
