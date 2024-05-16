// We are doing same task using promises

let step1 = new Promise(function(resolve,reject){
    console.log("Please wait I am selecting images");
    setTimeout(function(){
        console.log("I have selected Image");
        resolve();
    },4000)
});

step1.then(()=>{
    return new Promise(function(resolve,reject){
        console.log("Please wait for 4sec, I am applying filter to the image");
        setTimeout(function(){
            console.log("filter applied");
            resolve();
        },4000);
    });
}).then(function(){
    return new Promise(function(resolve,reject){
        console.log("Please wait for 3sec, I am applying Caption to the image");
        setTimeout(function(){
            console.log("Caption added!");
            resolve();
        },3000);
    })
}).then(()=>{
    return new Promise(function(resolve,reject){
        console.log("Please wait for 3sec, I am Uploading image;");
        setTimeout(function(){
            console.log("image Uploaded Successfully !");
        },3000);
    })
});