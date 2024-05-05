// let inpEl = document.querySelector("input");

// // addEventListener()
// inpEl.addEventListener("input", function(event){
//     // console.log(event);
//     // console.log(event.target);
//     console.log(event.target.value);
// });


// e is the object that has multiple

// -------------------------------Class work (Jo jo value input me daloge wo h1 ke andar push honi chaiye)-------------------------
let inpEl = document.querySelector("input");
let h1 = document.createElement("h1");

inpEl.addEventListener("input",function(e){
    h1.innerText = e.target.value;
    console.log(h1);
})
