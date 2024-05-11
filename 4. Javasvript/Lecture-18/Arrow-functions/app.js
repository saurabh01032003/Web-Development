// Cube
// function cube(a){
//     return a**3
// }

// Arrow function for above 
// let cube = a => a*a*a;

// console.log(cube(3));

// let area = (length,breadth)=> length*breadth;

// console.log(`Area of Rectangle is ` + area(2,3));

// Arrow function ka "this" is dependent on parent ka "this" pointer

// let obj = {
//     a:10,
//     fn: ()=>{
//         console.log(this);
//         function sam(){
//             console.log(this);
//         }
//         sam();
//     },
// };
// obj.fn();

// ------------------------------------------
// let obj1 = {
//     a: "Saurabh",
//     fn: function(d,e,f){
//         console.log(`hello from ${this.a} `,d,e,f);
//     },
// };

// let obj2 = {
//     a: "Paras",
// };

// // .call() && .apply() used to change reference of this key-word
// obj1.fn(10,20,30);
// obj1.fn.call(obj2,10,20,30);
// // obj1.fn.apply(obj2,10,20,30); // error
// obj1.fn.apply(obj2,[10,20,30]); // arguements with array must

// =========================================================
// let obj = {
//     num: 3,
//     fn: function () {
//         console.log(this);
//     }
// }
// obj.fn();


//5. arrow function -> ka this always points to parent ka this
// let obj = {     //this --> window
//     num: 3 , 
//     fn: ()=>{
//         console.log(this);
//     }
// }
// obj.fn();


// question:
let obj = {
    num: 30,
    fn: function () {
        let calculate = () => {
            console.log(this) //parent ke this ko
        }
        calculate();
    }
}

obj.fn(); //method calling