// // Cube
// function cube(a){
//     return a**3
// }

// // Arrow function for above 

// // let cube = a => a*a*a;

// console.log(cube(3));

//-------------------------
// function area(length,breadth){
//     return length*breadth;
// }

// console.log(area);
// console.log(area(4,5));

// // Arrow function for above function is

// let area = (length,breadth)=> length*breadth;

// console.log(`Area of Rectangle is ` + area(2,3));

// //----------------------------------
// function square(n){
//     return n*n;
// }
// console.log(square(4));

// //----------- way-1
// let square = (n) => {
//     return n*n;
// }
// console.log(square(4));


// //----------- way-2
// let square = (n) => n*n; // no need of return statement if only one line is present in body and that statement is return statement
// console.log(square(4));

// // ---------- way-3

// let square = n => n*n; // no need to pass parenthesis if there is only one arguement in function
// console.log(square(4));


// =========================================================

//5. arrow function -> ka this always points to parent ka this

// let obj = {     //this --> window
//     num: 3 , 
//     fn: ()=>{
//         console.log(this);
//     }
// }
// obj.fn();


// question:
// let obj = {
//     num: 30,
//     fn: function () {
//         console.log(this);
//         let calculate = () => {
//             console.log(this) //parent ke this ko
//         }
//         calculate();
//     }
// }

// obj.fn(); //method calling

//--------------- Arrow function ka "this" is dependent on parent ka "this" pointer

let obj = {
    a:10,
    fn: ()=>{
        console.log(this);
        function sam(){
            console.log(this);
        }
        sam();
    },
};
obj.fn();