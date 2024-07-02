let inpEl = document.querySelector('input');
let spanEl = document.querySelector('span');

let callAPI = (e)=>{
    console.log('api called', e.target.value);
}

// inpEl.addEventListener('input',callAPI)
inpEl.addEventListener('input',throttling(callAPI,1000))

// throttling => 2 arguements and returns a function
// let throttling = (fn,wait)=>{

function throttling(fn,wait = 2000){
    let idd = null;
    return (e)=>{
        clearTimeout(idd);
        idd = setTimeout(()=>{
            fn(e);
        },wait)
    }
}

let updateNumber = throttling(()=>{
    spanEl.innerText = ++spanEl.innerText;
},1000)

document.addEventListener('mousemove',updateNumber);