// image Select
function step1(fn){
    console.log("please wait I am selecting the image...");
    setTimeout(function(){
        console.log("image Selected");
        fn("selected image"); // yaha ke baad step 2 chalega
    },4000);
}


// filter
function step2(image,fn) {
    console.log(`applying filter to the ${image}`);
    setTimeout(function(){
        console.log("filter applied")
        fn('applied filter') // step 3 chalega
    },2000);
}

// for caption
function step3(filter,fn){
    console.log(`please wait I am adding caption to ${filter}`)
    setTimeout(function(){
        console.log("Caption Added");
        fn('Captioned Image'); // step4 chalega ab
    },3000);
}

// for uploading
function step4(caption){
    console.log("Please wait I am uploading image");
    setTimeout(function(){
        console.log("Image uploaded Successfully"); // execution end
    },3000);    
}

step1(function (image){ // step1 ka arguement ek function hai 
    step2(image,function(filter){
        step3(filter,function(caption){
            step4(caption);
        })
    });
});


// Function Hell : function ke andar multiple call back functions
// Pyramid of DOOM : Code grow horizontally insted of vertically-> this leads to complexity of code which results difficulty in debugging