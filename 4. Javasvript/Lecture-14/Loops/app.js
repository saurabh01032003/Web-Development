
// let n = 5

// for(let j = 0;j <= 5;j++)
// {
//     console.log(j)
// }


// let i = 0;
// while(i <= 5){
//     console.log(i)
//     i++
// }

// ---------------------Extra Loops
// Important

// for-of(for iterable items (i.e array))   Vs    for-in (for objects)

// array

let arr = [1,2,3,5,4];

for(let item of arr){
    console.log(item)
}

let person = {
    name : "Saurabh",
    age : 45,
    gender: "Male",
    class : "CSE"
};

for(let item in person){
    console.log(item, person[item])
}