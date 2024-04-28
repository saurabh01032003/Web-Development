let step2 = function (image){
    return new Promise(function(resolve,reject){
        console.log(`plz wait applying filter on ${image}...`);
        setTimeout(function(){
            resolve("filtered image");
        },2000);
    });
};

let step3 = function (filter){
    return new Promise(function(resolve,reject){
        console.log(`plz wait adding Caption on ${filter}...`);
        setTimeout(function(){
            resolve("filtered image");
        },2000);
    });
};
