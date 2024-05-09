// // Constructor

// // function Person(){
// //     this.name = naam;
// //     this.age = umar;
// //     this.favColor = favRang;
// // }

// // Jo constructor funcion ke liye same hai wo classes ke liye bhi same hai

// Constructor Function 
// function Person(naam,umar){
//     this.name = naam;
//     this.age = umar;
// };
// Person.prototype.greeting = function(){
//     return `Hello from ${this.name}`;
// }
// console.log(Person);
// let person1 = new Person('Samarth',33);
// console.log(person1); // object
// console.log(person1.greeting()); // We can access the property greeting, defined in Person.prototype


// Class Syntax is a syntactical sugar()

// // class
// class Person2 {
//     constructor(naam,umar,favRang){
//         this.name = naam;
//         this.age = umar;
//         this.favColor = favRang;
//     }
//     greeting(){
//         console.log(`Hello from ${this.name}`)
//     }
//     goodbye(){
//         return `jate jate yaad rakhna my fav color is ${this.favColor}`;
//     }
// }

// let p3 = new Person2("sarthak",19,"blue");
// let p4 = new Person2("Saurabh",19,"dark blue");
// console.log(p3);
// console.log(p3.greeting());
// console.log(p4.goodbye());

// ---------------------------------------------
// ********Inheritance

class Kammoji{
    constructor(yaade,bhool){
        this.yaade = "Main tera boy-friend";
        this.bhool = "tu meri girl-friend";
    }
    greet(){
        return "tu mainu kaindi na na na na";
    }
    goodbye(){
        console.log(`Some goodbuys aree good senoritta`)
    }
}
 
class KammojiKaAshiq extends Kammoji{
    constructor(yaade,bhool,mail){
        // Jo property upar se aa rhi(i.e parent se enherit hoke aa rhi) use Super keyWord ke andar enclose kardo
        super(yaade,bhool); // {yaade,bhool} -> inherited from Parent Kammoji
        this.email = mail; // nayi property add hogai
    }

    greet(){
        return 'Main whi hoon';
    }

    callMe(){
        return "9334375234";
    }
}

let k2 = new KammojiKaAshiq ("sam","vohra","sam@9334375234");
console.log(k2);
console.log(k2.greet()); // greet KammojiKaAshiq class me hi mil gaya So' parent class me jayega hi nahi check karne
console.log(k2.callMe());
console.log(k2.goodbye());

// // console.log(Kammoji);
// let iAm = new Kammoji();
// console.log(iAm);



// JS is not OOPS language although it follows 4 pillors of OOPs(Inheritance, Polymorphism, Abstraction, Encapsulations)