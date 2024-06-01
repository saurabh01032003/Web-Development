// SVG(Scalar Vector Graphics) is also an web-api of HTML

// Canvas is a web-apis of HTML.
// It is 2D-drawing, skill

let canvas = document.querySelector("canvas"); // board
let ctx = canvas.getContext("2d");// brush aa gaya yaha tk


// ctx.fillStyle = "red"; // brush lo red kr diya(it is a property keep in mind)
// ctx.fillRect(100,10,100,100); // x-cordinate,y-cordinate,length,breadth


// ---------------- Outline ke liye
// // ctx.strokeStyle = "Orange"; // brush ka color change ho gaya hai 
// ctx.strokeRect(10,10,40,40);
// ctx.strokeStyle = "Orange"; // brush ka color baad me change hua to upar me change nahi hogi


// ----------------------draw path
// ctx.beginPath(); //It shows you are starting journey of path

// ctx.moveTo(10,10); // starting-point decide kar raha(aap pen ko yaha pe rakho pahle at 10,10)
// ctx.lineTo(50,50);
// ctx.lineTo(10,100);
// ctx.stroke(); // outine aa jayega
// ctx.fill(); // fill ho jayega
// ctx.closePath();


// ------------For Text-------------------

ctx.fillStyle = 'orange';
ctx.font = '30px monospace'; // 30 px size ke text ban jayega
ctx.fillText("samarth",30,30); // starting point of text 

