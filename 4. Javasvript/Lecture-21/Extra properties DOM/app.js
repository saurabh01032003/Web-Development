let ele = document.querySelector("h1")

// Element(tag) ke andar ke contents ko access karne ke liye liye (getter)
console.log(ele.innerText);// innerText is brainFull reads CSS property

console.log(ele.textContent);// textContent is brain-Less(CSS read nahi kar pata)

console.log(ele.innerHTML) // sara ka sara chiz inside givent tag will be displayed




//-------- setter

// -----innerText

// ele.innerText = "<b>Rama rama japte japte</b>"
// console.log(ele.innerText);

// let b = document.querySelector("b"); // <b></b> as text insert hua naki tag
// console.log(b);

//----------textContent
// ele.textContent = "<b>Rama rama japte japte</b>" // yaha bhi <b></b> as text gaya hai naki tag
// console.log(ele.textContent);

// let b = document.querySelector("b");
// console.log(b);

//------------innerHTML(we generally use this as setter)
ele.innerHTML = "Rab <div> Ram ji</div>ne bana di jodi"; // as it is insertion ho gaye <div> is acting like tag here
console.log(ele.innerHTML);

let divv = ele.querySelector("div");
console.log(divv);
