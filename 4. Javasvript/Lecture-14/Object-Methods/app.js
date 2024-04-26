
let person = {
    naam : "Saurabh",
    age : 21,
    // Functions which are created inside object are called : methods
    dance : function(){   // function sallu(){
        console.log("I am a dancer");
    },
}

// console.log(person.dance); // dance is a key which contain entire function as value, So' function will be printed as it is
// let x = person.dance(); // dance will run and value stored in x
// console.log(x); // dance function will run  & returned value will be printed

// console.log(person.dance());

// console.log(person.sallu()) // wrong -> you can't access

// -----------------------------------------------------


// let marks = {
//     web : 100,
//     dsa : 19,
//     python: 23,
//     total : function(){
//         console.log("hi",marks.web + marks.dsa + marks.python);
//         return marks.web + marks.dsa + marks.python;
//     }
// };

// console.log(marks.total);
// console.log(marks.total()); // total function will run as well as its returned value will be printed
// let retrned_Value = marks.total(); // total function run ho gaya hai and it's value is stored in returned_Value variable
// console.log(retrned_Value)

// --------------------------------------------------------------------------------------
let marks = {
    web : 100,
    dsa : 19,
    python: 23,
    total : function(){
        // this keyword points to the object, inside which the method is defined
        console.log(this);
        return this.web + this.dsa + this.python;
    }
}

let out = marks.total();
console.log(out)


// -----------------------------------------
// let x = 85

// if(x >= 90){
//     console.log('O+');
// }else if(x >= 80 )
// {
//     console.log("A+")
// }else if(x >= 70)
// {
//     console.log("A")
// }else if(x >= 60)
// {
//     console.log("B")
// }else if(x >= 50)
// {
//     console.log("C")
// }else if(x >= 40)
// {
//     console.log("D")
// }else{
//     console.log("fail")
// }


// Predefined Methods

