
let inpEl = document.querySelector("#text");

let btn = document.createElement("button");

let parent = document.querySelector("ul");

btn.addEventListener("click",function (e){
    let li = document.createElement("li");
    parent.appendchild("li");
    li.innerHTML = e.target.value;
})
console.log(li);



































































// -------------------------------------

// let inp = document.querySelector("input");
// let ul = document.querySelector("ul");
// let btn = document.querySelector("button");

// btn.addEventListener("click", function (e) {
//     let li = document.createElement("li");

//     li.innerText = inp.value;
//     ul.appendChild(li);

//     // for deleting li-item on clicking li
//     li.addEventListener("click",function(e){
//         // li.style.color = "red";
//         li.remove();
//     })
//     inp.value = "";
// });

// // Error (kyon ki li is created inside block)
// // li.addEventListener("click",function(e){
// //     // li.style.color = "red";
// //     li.remove();
// // })

// // ------dir objects show kr rha which contains => onclick : null, on______ && so on

// // console.dir(ul); // ul ke andar kon kon se events hai

// // btn.onclick= function(){
// //     console.log("hi");
// // };

// // ul.onclick = function(){
// //     console.log("hi");
// // };

