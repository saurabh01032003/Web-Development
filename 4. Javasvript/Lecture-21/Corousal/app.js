let imag = document.querySelector('img');
let arr = ["https://images.unsplash.com/photo-1715646527233-3c65f2dde30c?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1715775491904-ef5cdae40f0f?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1714890038412-a85c47641d78?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8"]

let n = 0;
// setInterval method returns an interval ID which uniquely identifies the interval
let id1 = setInterval(function(){
    imag.setAttribute('src',arr[n%arr.length]);
    n++;
},3000);


setTimeout(function () {
    clearInterval(id1); // dhayan do setInterval with id1 will terminate after (18000ms == 18sec)
  }, 18000);

