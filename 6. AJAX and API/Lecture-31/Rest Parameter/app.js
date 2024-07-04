
// rest parameter

function sum(a,b,c,...num){
    console.log(num);
    return a+b+c;
}

let ans = sum(1,2,3,8,9,6,7);
console.log(ans);

// ---------
// // ❌Wrong way -> as rest parameter must always be last parameter
// function sum(...num,a,b,c){
//     return a+b+c;
// }
// let ans2 = sum(1,2,3);
// console.log(ans2);