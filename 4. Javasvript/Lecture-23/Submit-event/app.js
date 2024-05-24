let formEle = document.querySelector("form");

formEle.addEventListener("submit", function (event) {
    // submit event ki info 'e' object me hai && submit event form ke upar apply ho raha isliye target elemetnt formELe(i.e form hai)

    // default behaviour of form is submit -> which leads to refresh/reload the website

    event.preventDefault();// to stop form from reloading/refressing (default behaviour ko rokne ke liye)

    // console.log(event.target); // give same element i.e <form>....</form>

    // console.log(formEle.elements); // on submitting form it will give all elements inside form (shown below)
    // form ke andar ye sare elements at index wise shown 
    /* 0: input
      1: input
      2: button
      3: button */
    // // to print inputs(i.e form ke children hi hai inputs)
    // console.log(event.target.children[0].value);
    // console.log(event.target.children[1].value);

    // ----------------

    // // Another way to print inputs using "elements" in place of "children" => we mostly use this
    
    // console.log(event.target.elements[0].value);
    // console.log(formEle.elements[0].value); // same as above

    
    console.log(event.target.elements[1].value);
});