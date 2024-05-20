// function sam(){
// }
// console.log(sam()); // when nothing is returned -> undefined is returned by default

// // ----------------------------------------------------
// // constructor functions -> used to create objects
// // hence out is object

// function sam(){}

// let obj = new sam(); // new key-word ki help se agar function call hua to -> it's called constructor function
// console.log(obj);

// -----------------------------------------------------

// function Person() {
//     this.name = "Samarth";
//     this.age = 33;
// };

// let person1 = new Person();
// console.log(person1);
// console.log(person1.naam)

// // --------------------------------------
// function User(naam, umar){

//     // We are adding properties to object(i.e person1,person2), created by calling above function using "new" keyword
//     this.name = naam;
//     this.age = umar;
//     this.dance = function(){
//         return `${this.name} cant dance`;
//     };
// }

// let person1 = new User("Ronny",25)
// let person2 = new User("Renuka",35)
// console.log(person1);
// console.log(person2);
// // dance is function, So' it must be called
// console.log(person1.dance());
// console.log(person2.dance());

// Constructor functions act as a blueprint to generate objects with simmilar properties
//(i.e in above example person1 && person2 are two different objects but having same properties(name,age,dance), values may be diffrent (as here Ronny & Renuka are diffrent values corrosponding to property name));

// -------------------------------------------------------
function User(naam, umar){
    this.name = naam;
    this.age = umar;
}

// Hamne User ke prototype me dance naam ki property insert kardi, now you can access it 

User.prototype.dance = function (){
    console.log(`${this.name} cna't dance saala`)
};

let person1 = new User("Ronny",25);
let person2 = new User("Renuka",23);

// User itself a prototype
// console.log(person1);
// person1.dance();

console.log(person1.__proto__ == User.prototype);
console.log(User.__proto__ === User.prototype);
                                                                
// console.log(User.prototype.__proto__ === Object.prototype); // User.__proto__ : shows us a funcion

// // User is itself a prototype and acting as fallback source for object created
console.log(User.__proto__ === Function.prototype)

console.log(Function.prototype.__proto__ === Object.prototype);

// console.log(User.prototype)

// // console.log(person1.prototype);
// console.log(person2.__proto__); // dance property is stored
// console.log(person1.__proto__ === User.prototype);

