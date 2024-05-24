// let inpEl = document.querySelector("input");

// // // Whenever an event is executed, along with function, an object is attached with it(we generally name it as event/e)
// // // e/event is an object-> containing various properties -> event.target(only of our importance) => (jis element pr event target hua hai wo dega i.e in our case <input> tag poora dega)

// function fun(e){
//     console.log(e); // event/e object will be printed
//     console.log(e.target); // event object ke andar target property hai jo "<input type="text"></input>" lakr dega

//     console.log(e.target.value); // jo input ke andar value hum denge whi print hoga
// }

// inpEl.addEventListener('input',fun); // 'input' is event name-> occur when we start writing inside "input" field


// ---- Q. Jo bhi hum input me denge usko empty <h2> tag me insert karo

let inp = document.querySelector('input');

let h2 = document.querySelector('h2');

function insert(event){
    h2.innerText = event.target.value;
}

inp.addEventListener('input',insert);
console.log(h2);












// ++++++++++++++++++++++++++++++++++++  Skip niche ka part


// //------------------- addEventListener()
// inpEl.addEventListener("input", function(event){
//     // console.log(event);
//     // console.log(event.target);
//     console.log(event.target.value);
// });


// // e/event is the object that has multiple

// -------------------------------Class work (Jo jo value input me daloge wo h1 ke andar push honi chaiye)-------------------------
// let inpEl = document.querySelector("input");
// let h1 = document.createElement("h1");

// inpEl.addEventListener("input",function(e){
//     h1.innerText = e.target.value;
//     console.log(h1);
// })
