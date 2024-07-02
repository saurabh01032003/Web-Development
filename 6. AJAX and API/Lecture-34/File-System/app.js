let fs = require('fs');
console.log(fs) // object 

// CRUD Operations

// Create
// let data = "Main whi hoon, jo padhkar nahi aaya"
// fs.writeFile('sam.txt',data,{
//     encoding: 'utf-8',
//     flag:'w'
// },(err)=>{
//     if(err) {throw err}
//     console.log('data created successfully')
// });


// read
// fs.readFile('sam.txt')


// update
fs.appendFile('sam.txt',"malik main whi hoon",
    (err)=>{
        if(err){throw err}
        console.log("File updated successfully")
    }
)


// --------------------------------------------------
// package.json -> origional info of backend project
// package-lock.json -> origional detailed info of backend project

// npm i give-me-a-joke // installing package
// npm i give-me-a-joke // uninstalling
