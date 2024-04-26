// function sam(){
// }
// console.log(sam()); // when nothing is returned -> undefined is returned by default

// // ----------------------------------------------------
// // constructor functions -> used to create objects
// // hence out is object

// function sam(){}

// let out = new sam(); // new key-word ki help se agar function call hua to -> it's called constructor function
// console.log(out);

// -----------------------------------------------------

// function Person() {
//     this.naam = "Samarth";
//     this.age = 33;
// }
// console.log

// // --------------------------------------
// function User(naam, umar,sahi){
//     this.name = naam;
//     this.age = umar;
//     this.isMale = sahi;
//     this.dance = function(){
//         console.log("Pappu cant dance");
//     };
// }

// let person1 = new User("Ronny",25, true)
// let person2 = new User("Renuka",35, false)
// console.log(person1);
// console.log(person2);

// let obj = {};
// new obj();


// -------------------------------------------------------
// this
function User(naam, umar,sahi){
    this.name = naam;
    this.age = umar;
    this.isMale = sahi;
}

User.prototype.dance = function (){
    console.log("Pappu cna't dance saala")
};

let person1 = new User("Ronny",25,true);
person1.dance();