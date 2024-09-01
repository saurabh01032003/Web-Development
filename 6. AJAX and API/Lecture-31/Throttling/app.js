//----------- Mouse ko thoda sa move karne se bahut jada 'mousemove' event trigger hota

// let spanEl = document.querySelector('span');

// function updateNumber(){
//     spanEl.innerText = ++spanEl.innerText;
// }

// document.addEventListener('mousemove',updateNumber);


// ----------------Throttling-------------------------------------
// Ab mouse ko kitna bhi move kara lo : jab 1sec(1000ms) ke liye rukega tb ek event mana jayega
let spanEl = document.querySelector('span');

function throttle(fn, wait=2000){
    let timerId = null;
    
    return ()=>{
        clearTimeout(timerId);
        timerId = setTimeout(()=>{
            fn();
        },wait);
    }
}

const updateNumber = throttle(()=>{
    spanEl.innerText = ++spanEl.innerText
},1000)
document.addEventListener('mousemove',updateNumber);