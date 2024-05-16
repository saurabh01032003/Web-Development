//DOM(Document Object Model) : Changing html file using javascript only(without going into html file).


// There are 5 Selectors in DOM

// 1. getElementById
// 2. getElementsByTagName
// 3. getElementsByClassName
// 4. querySelector
// 5. querySelectorALL

// // -------------------1.TagName
// let h1 = document.getElementsByTagName("h1"); //  returns an array
// console.log(h1);

// // ----------------2. ID
// let dom = document.getElementById("dom") // return single element(jo pahle aayega in html code)
// console.log(dom); 

// // ---------------- 3. ClassName
// let classes = document.getElementsByClassName("divv"); // returns array sort of thing (same as TagName)
// console.log(classes);
// console.log(classes[0]);
// console.log(classes[1]);

// // ----------4. querySelector (use to select class, id, tag)
// let x = document.querySelector("h1"); // return single element(first occurence only)
// console.log(x);

// let y = document.querySelector(".divv");//class selector // return single element(first occurence only)
// console.log(y)

// let z = document.querySelector("#dom");// for id select // return single element(first occurence only)
// console.log(z)

// // // -------------5.query selector all (selects all occurences of class, id and tag) // returns array type
// let p = document.querySelectorAll("h1");
// console.log(p);
// console.log(p[0]);
// console.log(p[1]);

// let q = document.querySelectorAll(".divv");
// console.log(q);
// console.log(q[0]);
// console.log(q[1]);

// let r = document.querySelectorAll("#dom"); // return array sort of thing (but we generally avoid giving same ids to multiple elements)
// console.log(r);
// console.log(r[0]);
// console.log(r[1]);


// ****************************************************************************************************
// --------------Applying CSS

// let h1 = document.getElementsByTagName("h1");
// console.log(h1);
// console.log(h1[0]);
// console.log(h1[1]);
// h1[0].style.color = "red"; // h1 ek array of tags hai jisme tumne select kiye hai
// h1[1].style.backgroundColor="green";

// // -------------------------

// // Agar saare elements of h1(array) pr css lagani ho
// for(let item of h1){
//     item.style.fontSize = "90px";
// }


// // --------------------------
// let idd = document.getElementById("dom"); // ek hi element select hua hai , naki array so indexing not allowed
// console.log(idd);
// idd.style.backgroundColor = "yellow";



// // -------------------

let classes = document.getElementsByClassName("divv")
// classes[0].style.backgroundColor="aqua";
// classes[1].style.backgroundColor="green";

// for(let item of classes){
//     item.style.fontSize = "40px";
//     item.style.color = "aqua";
// }


// for(let item of classes){
//     // If you want to give multiple property with in same line
//     item.style.cssText = `color: red;
//     background-color:yellow; 
//     font-size:50px;
//     border : 2px solid black`;
// }


// --------------query Selectors

// let h1 = document.querySelector("h1");
// h1.style.color= "aqua";

// let classs = document.querySelector(".divv");
// classs.style.backgroundColor= "yellow";

// let idd = document.querySelector("#dom");
// idd.style.border= "5px solid red";

// -----------query Selector ALL

// let h1 = document.querySelectorAll("h1");
// for(let item of h1){
//     item.style.color= "aqua";
// }

// let classs = document.querySelectorAll(".divv");
// for(let item of classs){
//     item.style.backgroundColor= "yellow";
// }


//---------wrong practice(multiple elements ko same id dena)
// let idd = document.querySelectorAll("#dom");
// for(let item of idd){
//     item.style.border= "5px solid red";
// }



// -----------******IMPORTANT******





//===================== Attribute Manipulation











//---------------------- attribute Selection 

// accessing attribute (getter) *** getter
// console.log(an.getAttribute("href"));

// console.setAttribute("href","http://reddit.com");




