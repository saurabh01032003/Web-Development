
// let x = "saMArth";

// // // length is a property ()-> nahi use hote properties me

// console.log(x.length) // property
// console.log(x)
// // // to convert given string into upper case
// console.log(x.toUpperCase())
// console.log(x.toLowerCase())

// // // // trim method
// let y = "    SaurAbh      "
// let z = y.trim();
// console.log(z)
// console.log(y.trim().length)

// console.log(y.includes("a"))
// console.log(y.includes("M"))
// console.log(y.includes(" "))
// console.log(y.includes("    "))


// // ------------------------------------------------------------------------------
// // Number Methods

// // // Math is a predefined Object
// console.log(Math.PI)
// console.log(Math.floor(3.6))
// console.log(Math.ceil(3.6))

// // // // Round-off karne ke liye
// console.log(Math.round(4.8))
// console.log(Math.round(4.3))

// // // // for absolute
// console.log(Math.abs(-200))
// console.log(Math.abs(200))


// // ------------------------------------------
// Random Numbers -> Ranges from [0,1) , here '0' is included but '1' is not included
console.log(Math.random())

// // In order to change range ->
console.log(Math.random()*10) // Range changes to [0,10)

// [7,31] -> 31-7 + 1 (if righ val(31) is inclusive extra 1 is added)
console.log(Math.random()*25 +7)
console.log(Math.floor(Math.random()*25 +7))

// 6 digit random no. [100000,999999]
// both are inclusive so' multiplication factor = (ul - ll + 1)[both included ul and ll]
// add 100000 as starting from 6 digit smallest number
console.log(Math.floor(Math.random()*900000) + 100000)

