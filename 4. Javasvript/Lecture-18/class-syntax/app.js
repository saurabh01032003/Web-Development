// // Constructor

// // function Person(){
// //     this.name = naam;
// //     this.age = umar;
// //     this.favColor = favRang;
// // }

// // Jo constructor ke liye same hai wo classes ke liye bhi same hai

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
// console.log(p3.greeting());
// console.log(p4.goodbye());

// ---------------------------------------------
class Kammoji{
    constructor(yaade,bhool,email){
        this.yaade = "Main tera boy-friend";
        this.bhool = "tu meri girl-friend";
    }
    greet(){
        return "tu mainu kaindi na na na na";
    }
}

class KammojiKaAshiq extends Kammoji{
    constructor(yaade,bhool,email){
        super(yaade,bhool);
        this.email = email;
    }

    callMe(){
        return "9334375234";
    }
}

let k2 = new KammojiKaAshiq ("sam","vohra","sam@9334375234");
console.log(k2);
console.log(Kammoji);


// JS is not OOPS language although it follows 4 pillors of OOPs(Inheritance, Polymorphism, Abstraction, Encapsulations)