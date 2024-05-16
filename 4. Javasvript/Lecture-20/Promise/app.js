// ----------------------
// // Promise : It is a constructor function which accepts call back function and call back function takes two arguement(resolve and reject)
// .then() => Jab wada pura hogaya
// .catch() => Jab wada tut gaya

// let promise = new Promise(function(resolve,reject){
//     let data1 = `tumse mil ke dil ka hai jo haal kya kare`;
//     resolve(data1); // .then ke andar ka function call hoga
// })

// promise.then((data1)=>{ // resolve will be run here
//     console.log(data1);
// })

//---------------------------
// let promise = new Promise(function(resolve,reject){
//     let data1 = `tumse mil ke dil ka hai jo haal kya kare`;
//     reject(); // .catch ke andar ka function run hoga
// })

// promise.catch(()=>{
//     console.log(`Jo tum na ho rahenge hum nahi`);
// })

// ---------------------------

// let promise = new Promise(function(resolve,reject){
//     let data1 = `tumse mil ke dil ka hai jo haal kya kare`;
//     let data2 = `Wo nahi mili yaar`;

//     // if reject and resolve both are simultaneously called than jo pahle call hua hai wahi chalega
//     resolve(data1); // .then ke andar ka function call hoga
//     reject(data2);
// })

// promise.then((data1)=>{ // resolve will be run here
//     console.log(data1);
// }).catch(function(data2){
//     console.log(data2);
// })

// ----------------------------------

let p1 = new Promise(function(resolve,reject){
    console.log(`Aaaiye Shuru karte hai`);
    setTimeout(function(){
        console.log("2 sec ho gaye");
        resolve();
    },2000);
})

p1.then(function(){
    return new Promise(function(resolve,reject){
        console.log("Promise run ho gaya hai,wait for 3sec");
        setTimeout(function(){
            console.log('3sec ho gaye bhai');
            resolve();
        },3000);
    });
}).then(()=> {
    console.log("Dono kaam ho gaye");
})