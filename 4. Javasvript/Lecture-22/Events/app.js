// let btn = document.querySelector("button");

// function boss(){
//     console.log("main hoon External event")
// }

// btn.onclick = boss; // yaha run nahi karte function ko


// --------------------------------
// function boss(){
//     console.log("Chata laga")
// }

// function slap(){
//     console.log("Laal hogaya")
// }

// // btn.onclick = boss;
// // btn.onclick = slap;// Override hojayega (ek time pe ek hi function chalega)

// // --------------------------------- We can trigger multiple function on one event, So we use event listerner
// btn.addEventListener("click",boss);
// btn.addEventListener("click",slap);


// -----------------------------------------------------------------------------------
let body = document.querySelector("body");

function colorMeRed(){
    body.style.backgroundColor = "red";
}

function colorMeGreen(){
    body.style.backgroundColor = "green";
}

function colorMeYellow(){
    body.style.backgroundColor = "yellow";
}
let btnR = document.querySelector("#red");
let btnG= document.querySelector("#green");
let btnY = document.querySelector("#yellow");

btnR.addEventListener("click",colorMeRed);
btnG.addEventListener("click",colorMeGreen);
btnY.addEventListener("click",colorMeYellow);
