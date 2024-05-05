let divv = document.querySelector("div");


let h3 = document.createElement("h3");
h3.innerText = "Main whi hoon jise kabhi";

let h4 = document.createElement("h4");
h4.innerText = "Hi my Name is Saurabh";


divv.appendChild(h3);
divv.appendChild(h4);

// You can only append one element at a time using append function
// divv.appendChild(h3,h4); //Wrong


// ----------------
// For appending multiple elements 
let span = document.createElement("span");
span.innerText = "I am inside Span"
divv.append(span,h4); // niche ki side add honge inside given element(i.e koi agar element pahle se present hai to uske niche naye elements add honge)


// prepend
let secc = document.querySelector("section");
secc.prepend(span)

// secc.before(span);  // EK time pe ek hi use hoga ya to before or after
// secc.after(span);


