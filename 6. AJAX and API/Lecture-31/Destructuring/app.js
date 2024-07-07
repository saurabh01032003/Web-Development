// // Array destructuring

// let fruits = ['apple','banana','mango','guava','pineapple','lichi']

// // earlier way
// let first = fruits [0];
// let second = fruits [1];

// console.log(first);
// console.log(second);

// //------------- destructuring 
// let [pehla, dusra,tisra] = fruits;
// console.log(pehla); // apple
// console.log(dusra); // banana
// console.log(tisra); // mango

// // -----------------------
// let fruits = ['apple','banana','mango']

// let [first,second,third,fourth] = fruits;

// console.log(first); // apple
// console.log(second); // banana
// console.log(third); // mango
// console.log(fourth); // undefined -> 4th index pe koi element hi nahi hai fruits array me

// -------------------------
// let fruits = ['apple','banana','mango']

// let [first,second,third,fourth = "anonymous fruit"] = fruits;

// console.log(first); // apple
// console.log(second); // banana
// console.log(third); // mango
// console.log(fourth); // anonymous fruit

// ------------------------------
// let fruits = ['apple','banana','mango','pineapple']

// let [first,second,third,fourth = "anonymous fruit"] = fruits;

// console.log(first); // apple
// console.log(second); // banana
// console.log(third); // mango
// console.log(fourth); // pineapple


// ----------- Destructuring in Objects

let car = {
    name : 'nano',
    price : 100000,
}

// // older way
// console.log(car.name);
// console.log(car.price);

// newer way

// // ❌Wrong way : as object me keys ordered way me nahi hote isliye "n" aur "p" kon hai ye pata nahi chal pata
// let {n,p} = car;
// console.log(n,p);

// // right way ☑️ 
// let {name, price} = car;
// console.log(name);
// console.log(price);

// ----------- change name of key

// we have changed name of "name" to "n" && "price" to "p"
// let {name: n, price: p} = car;
// console.log(n);
// console.log(p);

// console.log(name); // error -> as we have changed name
// console.log(price); // error

// // -------------------
let {name :n ="maruti",price:p} = car;
console.log(n); // nano -> agar nano nahi present hota tab default print hota
console.log(p); // 100000