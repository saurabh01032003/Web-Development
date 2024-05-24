// ******************Adding Elements in html tag (3 methods)


//-------------- 1.appendChild()  (accepts only one arguement)
let p = document.createElement("p"); // creating element(tag) with name 'p'
let newDiv = document.createElement("div");

let parent = document.querySelector('article');
// parent.appendChild(p);
// parent.appendChild(newDiv);

// newDiv.innerHTML = "new Div"
// p.innerText = "new Paragraph tag";
// console.log(parent);

// ----------- accepts only (tag) as arguement
// p.appendChild('Ram ji start me add nahi ho paunga');  // wrong
//------------------------

// parent.appendChild(p,div); // wrong (because it only accepts one arguement)


//------------- 2.append() (for multiple elements last me add karega inside parent)

// parent.append(p,newDiv);

//----It can accept (tag + text) both as arguement
// parent.append("Last me as a text add ho hi jaunga append hoon n");


// -------------3. prepend() (starting me add hoga)

// parent.prepend(p,newDiv); 

// // it can accepts (tag + text) both as arguement
// parent.prepend("Main to start me add ho jaunga as a text")
