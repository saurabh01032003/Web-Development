// // -------------Method 1 : 

// let req = new XMLHttpRequest()


// console.log(req);

// // console.log(req.onload);
// // console.log(req.error);

// // ------------------------

// // Connection establish hua hai basically
// // req.open('GET','https://api.tvmaze.com/singlesearch/shows?q=science'); // to create a link between client and endpoint (think client as remote && endpoint in server)
// req.open('GET','https://api.tvmaze.com/singlesearch/shows?q=entertainment'); // to create a link between client and endpoint (think client as remote && endpoint in server)

// // Apni request/demand bhejni hai
// req.send(); // remote ka button daba diya

// // console.log(req);

// let ul = document.querySelector('ul');


// // onload is property of object req => Jab sahi salamat data mile aur sara kaam sahi se hojae 


// // Apne ko "response" chaiye uske andar hi JSON string hai -> usko lane ke 2 tarike niche mentioned hai jaise bhi lao -> fir json object me convert karo using JSON.parse-> fir jo property data chahe JSON object se le lo using . operator
// req.onload = function(res){ 
//     console.log(res); // prints eventObject
//     console.log(res.target);
//     console.log(res.target == req);
//     // console.log(res.target.response)
//     let objHey = JSON.parse(res.target.response);
//     let li = document.createElement('li');
//     li.innerHTML = `<img src= ${objHey.image.medium} height="100px" width="75px">
//         <img src= ${objHey.image.original} height="100px" width="75px">
//         <span>${objHey.type}</span> <br>
//         <span>${objHey.name}</span>`;
//     ul.append(li);
// }

// // ---------- above commented part and this part is performing same task----------------------------------------------------------------------------------------

// // req.onload = function(){ 
// //     console.log(this); // this point to request jaha pe api gyi hai(data mila hai) -> it is an object basically -> print to see

// //     console.log(this.response);
// //     let objHi = JSON.parse(this.response);
// //     let li = document.createElement('li');

// //     // look at json data to depict relation between keys inside object
// //     li.innerHTML = `
// //         <img src= ${objHi.image.medium} height="100px" width="75px"> 
// //         <img src= ${objHi.image.original} height="100px" width="75px">
// //         <span>${objHi.type}</span> <br>
// //         <span>${objHi.name}</span>`;
// //     ul.append(li);
// // }

// // Lekin agar error aaya toh
// // req.onerror = function(){ // api ki data aayi hai in arguement, jo send hui thi pahle wo aayi
// //     console.log(this,"error");
// // }



// ------------------------2. fetch -> webapi -> returns a promise 

// let res = fetch('https://api.tvmaze.com/singlesearch/shows?q=batman');

// // console.log(res);

// res.then(function(data){
//     // console.log(data); // data(in form of packet) => metadata(less data than our requested data) aaya hai
//     // console.log(data.json());// data.json()-> also returns a promise 
//     return data.json();
//     }).then(function(allData){ // jo promise return hua tha uske wajah se nesting ho rhi
//         console.log(allData); // yaha pe sara data aa gya hai which we wanted -> ab dom manipulation laga ke data use karlo
//         console.log(allData.image.medium);
//         console.log(allData.name);
//         console.log(allData.language);
//     }).catch(function(err){
//     console.log("error");
//     })


// ------------------------------3. Axios

let req = axios.get('https://api.tvmaze.com/singlesearch/shows?q=batman'); // returns promise

req.then(function(res){
    console.log(res); // response ke andar data me sabkuch milega
    console.log(res.data); // we get complete data not like fetch which gives us meta data 
    console.log(res.data.name);
})
.catch(function(err){
    console.log("err");
})
