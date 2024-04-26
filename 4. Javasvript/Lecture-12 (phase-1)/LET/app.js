// // let naam = "saur";

// redeclaration ❎
// let naam = "Samarth";


// let sam = "10";

// // Double equality
// let x = 10 == sam;

// // Tripple equality
// let y = 10 === sam;


// // Datatype of x is boolean
// console.log(x);
// console.log(y);
// console.log(typeof y);


// ---------------------------------------------------
// let sam = "10";

// // Double equality
// let x = 10 != sam; // No type check()

// // Tripple equality
// let y = 10 !== sam;

// // Datatype of x is boolean
// console.log(x);
// console.log(y);



// ShortCircuiting bhi hoti hai ishme (i.e as soon as your output finalises you will come out without checking for further conditions)
let age = 30;
if(age < 18){
    console.log("You are not Allowed in club");
}else if(age >= 18 && age < 25){
    console.log("You are allowed but can't drink");
}else{
    console.log("You are allowed and can drink");
}


