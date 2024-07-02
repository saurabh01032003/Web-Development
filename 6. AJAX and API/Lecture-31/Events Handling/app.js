// ---------------Event Life Cycle : 
// false : bubbling(default) : target se upar ja raha
// true : capturing : html se target tk aa rha

// --------------
let grandParent = document.querySelector("#grandParent");
let parent = document.querySelector("#parent");
let child = document.querySelector("#child");

grandParent.addEventListener('click',function(){
    console.log("grandParent");
});

parent.addEventListener('click',function(){
    console.log("parent");
});

child.addEventListener('click',function(){
    console.log("child");
});

// 

// child, parent, grandParent