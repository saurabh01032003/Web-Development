let anchor = document.querySelector('a');


//---------- getAttribute(takes only one arguement i.e attribute name(key) and returns attributes value)
let lnk = anchor.getAttribute('href');
console.log(lnk);

console.log(anchor.getAttribute('class')); // sam (value of attribute)


// ----------setAttribute(takes two arguement->1st is key and 2nd is value)
// if attribute is already present it manipulates the value , if not present it inserts attribute along with value
// anchor.setAttribute('href','https://facebook.com');
// console.log(anchor.getAttribute('href'));

// anchor.setAttribute('class','saurabh'); // changes class value to "saurabh" from "sam"
// console.log(anchor.getAttribute('class'));


// let p = document.querySelector('h1'); 
// console.log(p); // prints current state of h1

// p.setAttribute('class','sush'); // h1 me "sush" naam ka class add ho gaya
// console.log(p.getAttribute('class'));
// console.log(p);


// ----------------------
// let input = document.querySelector('input');

// input.setAttribute('type','password'); // type of input changes from "text" to "password"
// input.setAttribute('type','checkbox'); // type of input changes from "password" to  "checkbox"
// input.setAttribute('type','date'); // type of input changes from "checkbox" to "date"
// input.setAttribute('type','color'); // type of input changes from "date" to "color"