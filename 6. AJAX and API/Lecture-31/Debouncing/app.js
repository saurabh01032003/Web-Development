let inpEl = document.querySelector('input');

let callFun1 = (e)=>{
    console.log("Main API hoon call hogya", e.target.value);
}

let debounce = (fn,wait)=>{
    let timerId;

    return (e)=>{
        clearTimeout(timerId);
        timerId = setTimeout(()=>{
            fn(e);
        },wait);
    }
}

let debouncedFun = debounce(callFun1, 2000);
inpEl.addEventListener('input', debouncedFun);