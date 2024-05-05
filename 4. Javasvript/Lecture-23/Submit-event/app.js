let formEle = document.querySelector("form");

formEle.addEventListener("submit",function(event){
    // submit event ki info 'e' object me hai && submit event form ke upar apply ho raha isliye target elemetnt formELe(i.e form hai)

    event.preventDefault();// to stop form from reloading/refressing
    console.log(event.target);

    // to print inputs(i.e form ke children hi hai inputs)
    console.log(event.target.children[0].value);
    console.log(event.target.children[1].value);

    // Another way to print inputs using "elements" in place of "children" => we mostly use this
    console.log(event.target.elements[0].value);
    console.log(event.target.elements[1].value);
});