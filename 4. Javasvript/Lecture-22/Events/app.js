// // // ---------------inline ke functions
// function doSomething(){
//     console.log("Inline ke andar ka pahla button press ho gya") // ye console me print hoga
// }

// // DIV ke andar ka DIVclick() function
// function DIVclick(){
//     console.log("Mujhe kyon dabaya");
// }

// // ---------------------
// let btn = document.querySelector('button');
// console.dir(btn); // this will display all properties of object inside arguement(i.e btn here)


// // ----------------------
// let btn = document.querySelector('button');


// // ---------- onclick is event handler content attribute
// btn.onclick = function (){
//     console.log("She is my love language");
// }
// console.dir(btn); // now "onclick" property of object button will show a function

// // //----Some more events : 
// // // --------------- onmouseenter : mouse ko simply button ke upar le jaoge to function chalega

// btn.onmouseenter = function(){
//     btn.style.color = "red";
// }

// // // --------------- onmouseleave : mouse ko simply button se hataoge to function chalega

// btn.onmouseleave = function(){
//     btn.style.color = "green";
// }

// You can't execute two or more functions on single event using above , So' we use eventListeners

// ------------eventListeners  (it takes two arguement -> 1st is event, 2nd is function to be performed using the event)

// ----------- "click" is event listener->don't use "onclick" in event listeners

// let btn = document.querySelector("button");

// function fun1(){
//     console.log("Main toh chalunga");
// }

// function fun2(){
//     console.log("Main bhi chalunga bhai");
// }


// // Both of below function will run on same event(click) simultaneously
// btn.addEventListener('click',fun1);
// btn.addEventListener('click',fun2);


// ---------------------------------Q. on clicking button the color of body changes
// let body = document.querySelector("body");

// let btn = document.querySelector("button");

// function changeColor(){
//     body.style.backgroundColor = "yellow";
// }

// btn.addEventListener('click',changeColor);

// ----- above and below are same

// btn.addEventListener('click',function(){
//     body.style.backgroundColor = "green";
// })
















// -------------------------------------------------

// let btn = document.querySelector("button");

// function boss(){
//     console.log("main hoon External event")
// }

// btn.onclick = boss; // yaha call nahi karte function ko


// // --------------------------------
// function boss(){
//     console.log("Chata laga")
// }

// function slap(){
//     console.log("Laal hogaya")
// }

// // btn.onclick = boss;
// // btn.onclick = slap;// Override hojayega (ek time pe ek hi function chalega)

// // // --------------------------------- We can trigger multiple function on one event, So we use event listerner
// btn.addEventListener("click",boss);
// btn.addEventListener("click",slap);


// // -----------------------------------------------------------------------------------
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
