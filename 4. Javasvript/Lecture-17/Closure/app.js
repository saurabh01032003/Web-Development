// // Closure : A function is never returned alone, A function is always returned with its dependent lexical scope/environment.
// function outer(){
//     let a = 10;
//     let b = 20;
//     function inner(){
//         console.log("Main hu Saurabh");
//         console.log(a);
//     }
//     return inner;
// }

// let d = outer();
// d();

// ------------------------------------------
// let b = 20;
// function outer(){
//     let a = 10;
//     function inner(){
//         console.log("Main hu Saurabh");
//         console.log(a);
//         console.log(b);
//     }
//     return inner;
// }

// let d = outer();
// d();

// ----------------------------------------------

// Use of closure : For privatisation of methods

function counter() {
    let count = 0;
    return {
        increment: function () {
            count++;
        },
        decrement: function () {
            count--;
        },
        getCount: function () {
            console.log(count);
        },
        reset: function () {
            count = 0;
        },
    };
}

let out = counter();
console.log(out);
out.getCount();

out.increment();
out.getCount();
out.increment();
out.decrement();
out.getCount();
out.reset();
out.getCount();
