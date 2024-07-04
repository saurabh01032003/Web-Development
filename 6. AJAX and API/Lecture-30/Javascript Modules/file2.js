// // ---------- 1. Named-export

// // -----------ek-ek ko barin bari export kar raha
// // export let firstName = 'Saurabh';
// // export let lastName = 'Mishra';
// // export let user_name = 'saur_sush';

// // export function sum(a,b){
// //     console.log(a+b);
// // }

// // ----------------Same as above
// let firstName = 'Saurabh';
// let lastName = 'Mishra';
// let user_name = 'saur_sush';

// function sum(a,b){
//     console.log(a+b);
// }

// // ek line me sabko export kardo
// export {firstName, lastName,sum, user_name};


// ----------------------- 2. default export
// default ek hi export hota hai

let firstName = 'Saurabh';
let lastName = 'Mishra';
let user_name = 'saur_sush';

function sum(a,b){
    console.log(a+b);
}

export default user_name;
