//-------------1.parentElement (parent hamesha ek hi hoga)
// let div1 = document.querySelector("#div1");
// console.log(div1.parentElement); // div1->ka parent article hai,[property hai run nahi hogi]

// console.log(div1.parentElement.parentElement);// "div1" ka parent <article></article> and <article> ka parent <section>

// console.log(div1.parentElement.parentElement.parentElement); // <body> (parent of section)

// console.log(div1.parentElement.parentElement.parentElement.parentElement); // <html> == parent of <body>

// console.log(div1.parentElement.parentElement.parentElement.parentElement.parentElement); // null is parent of html

// //-------------2. children (one element may have multiple child elemnents)
// let art1 = document.querySelector("#art1");
// console.log(art1.children); // give array sort of thing (containing all children)
// console.log(art1.children[0]); // div1 -> pahla child of article
// console.log(art1.children[1]);// div2 -> 2nd child of article
// console.log(art1.children[2]);// div3 -> 3rd child of article
// console.log(art1.children[3]);// p -> 4th child of article

// let body = document.querySelector("body");

// console.log(body.children); // h1, section,script 
// console.log(body.children[1].children[1].children) // section ke bachhe (do article) -> dusre bache ke bachhe(div6,div7,div8,para2)

// console.log(body.children[1].children[1].children[0]); // div6 
// console.log(body.children[1].children[1].children[1]); // div7
// console.log(body.children[1].children[1].children[2]) // div8
// console.log(body.children[1].children[1].children[3]) // p

//----------3. nextElementSibling
let div2 = document.querySelector(".div2class");
console.log(div2);
console.log(div2.nextElementSibling); // div3 -> div2 ka next sibling

// -------4. previousElementSibling
console.log(div2.previousElementSibling);// div1-> div2 ka prev. sibling

