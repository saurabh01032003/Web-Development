function saur1(){
    console.log("saurabh 1");
}

function saur2(){
    console.log("saurabh 2");
}

function saur3(){
    console.log("saurabh 3");
}

// // button ko click karne pe all three function will run simultaneously
// $('button').click(saur1);
// $('button').click(saur2);
// $('button').click(saur3);

// $('input').keydown(saur1);
// $('input').keyup(saur2);

// --------------------------------------------
// addEventListener -> on

// $('button').on('click',function(){
//     console.log('bhai bhai');
// })


// // this keyword -> ye wala this js wala this nahi hai 
// // i.e jquery vaala this => target element

// $('li').click(function(){
//     $('li').css('color','red'); // sare li ke color ko red kar dega
//     // $(this).css('color','red');// jis li ko tum target(click) karoge whi sirf color red hoga
// })

$('input').keydown(function(){
    console.log($(this).val())
})
