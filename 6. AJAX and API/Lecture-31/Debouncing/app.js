// // part -1
// let inpEl = document.querySelector('input');

// inpEl.addEventListener('input',function(e){
//     console.log("API called : ",e.target.val);
// })

// ----------part-2

// let inpEl = document.querySelector('input');

// let calledAPI = function(e){
//     console.log("API called : ",e.target.val);
// };
// let debounce = function(fn,wait){
//     return ()=>{

//     }
// }

// inpEl.addEventListener('input',calledAPI);


// ----------part-3

let inpEl = document.querySelector('input');

let calledAPI = function(e){
    console.log("API called : ",e.target.value);
};
let debounce = function(fn,wait){
    let idd = null;
    return (e)=>{
        clearTimeout(idd);
        // console.log(e);
        idd = setTimeout(()=>{
            fn(e);
        },wait);
    }
}

let debouncedValue = debounce(calledAPI,2000);
// console.log(debouncedValue);//arrow fn

inpEl.addEventListener('input',debouncedValue);


