// -----------------------Adding multiple value, to a given key using setAttribute (i.e one element may have multiple classes)
// let divv = document.querySelector("div");

// divv.setAttribute('class','sushant saurabh raju'); // ye theeno to add ho gaye but "sam" jo pahle se present tha wo remove ho gaya-> usko bhi baar-baar add karna padega
// console.log(divv);

//-----------

// To avoid above problems we have------"classist" ---- But only for classes

// ----1. Add(to add multiple classes to a given element )
let ele = document.querySelector("div");
ele.classList.add("sush"); // jo pahle se tha wo present rhega, bus "sush" extra add ho jayega
ele.classList.add("ram");
// console.log(ele);

// ----------------
ele.classList.add("raju","sezal","don","villian"); // you can add multiple classes using "," separeted also


//------2. remove()
// // console.log(ele); // "sam sush ram raju sezal don villian" itne sare classes honge abhi tak
// ele.classList.remove("ram","sezal","raju"); // now "ram","sezal","raju" got removed
// console.log(ele);

// -----------
// ele.classList.remove("sam"); // "sam" class get removed

// // ---------3. toggle()-> agar class hoga to remove ho jayega , agar nai hoga to add ho jayega
// ele.classList.toggle("sam"); // sam ko remove kiya tha upar step me to  sam nahi tha, toggle will add it
// console.log(ele);
// ele.classList.toggle("don"); // "don" class tha to remove ho jayega
// console.log(ele);



//---------4. contains
// console.log(ele.classList.contains("sush")); // "sush" class present hai ->so' it returns true
// console.log(ele.classList.contains("suhani")); // "sush" class present nahi hai ->so' it returns false