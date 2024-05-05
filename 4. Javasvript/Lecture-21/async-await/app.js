// Ache se backend me karenge isko 

async function hello(){
    // return 10; // asynch returns a promise with value 10, if nothing is returned in function a promise with undefined value will be returned
    return 20;

}

console.log(hello());

hello().then(function(d){
    console.log(d);
});

// await ka matlab hai jabtak right side ki equation puri nahi 

// async : function ke andar jane dega
// await : always used inside async function , and waits for some time, && javascript wait nahi karta so niche ke part skip ho jayenge(within same function)

async function a(){
    console.log("start");
    let out = await fetch("some link") // yaha wait karega iske wajah se niche ka part of same scope skip ho jayega and queue me lag jayega
    console.log(out);
    console.log("end");
}

async function b(){
    console.log(10);
    fetch("Some links") // yaha wait nahi karega
    console.log(20)
}

a();
console.log(1000);
b();
console.log(2000);


