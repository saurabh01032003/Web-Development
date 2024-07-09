// NodeJS install karne pr hume bohot sare modules milte hai(kuch aur install karne ki jarurat nahi padti) -> fs(file system) is also a module
let fs = require('fs');
// console.log(fs); // bahut bada object milega

// We will perform CRUD (Create, Read, Update, Delete) operations on file system

//------------------ Create or Write in fs

let data = "Hn hn main whi hoon jise kabhi chaha tha aapne ab kyon bhool gayi aap"

// takes 4 arguments -> 1. file Name(abc.txt) jisme write karna hai -> agar file present nahi hua to nayi file ban jayegin
                        // -> 2. data -> Jo data aapko aapko file me dalni hai
//3rd and 4th argument optional hai // -> 3. Object -> generally 2 property mentioned hoti hai -> encoding & flag : w (for write)
                                    // -> 4. Call-Back function -> argument me error aayega, if error occur hua hai than throw error else console "file written successfully"


// fs.writeFile('abc.txt',data,{
//     encoding : 'utf-8',
//     flag : 'w'
// },(err)=>{
//     if(err) {throw err} 
//     console.log("Successfully written inside file")
// })

// // ----------- OR -> alternate way (but use above part)
// let data2 = "Filmy ho raha bete";
// fs.writeFileSync('abc.txt',data2); // pahle ka data ht chuka hai


// -------------READ
// fs.readFile('abc.txt',{
//     encoding: 'utf-8', // ratne wali cheez hai -> to avoid buffer output -> we use encoding : 'utf-8'
//     flag : 'r', // read kar rahe isliye 'r' hai
// },(err,data)=>{
//     if(err){throw err}
//     console.log(data);
// })

// --------- OR -> but upar wala better hai 
// let data = fs.readFileSync('abc.txt');
// console.log(data.toString()); // buffer data(in form of hexadecimal) aaya tha apne paas humne use string me typecast kar diya



// --------------- UPDATE
fs.appendFile('abc.txt',"Ram Ram ji kaise hai aap",(err)=>{
    if(err){ throw err}
    console.log("append/update kr diya abc.txt file dekho");
})
// Jitni baar chalaoge utni baar append hoga

// --------- OR
// fs.appendFileSync('abc.txt','aag lage chahe basti main hum apni masti me');


// --------- DELETE -> file ko hi delete karna hai
// fs.unlink('abc.txt',(err)=>{
//     if(err){ throw err};
//     console.log("deleted successfully");
// })

// -------- OR 
// upar me already delete ho chuka hai ek baar write wala code chala do taki phir se file ban jaye
// fs.unlinkSync('abc.txt');




// --------- File system is not that much important now a days 
