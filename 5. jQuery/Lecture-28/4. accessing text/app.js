// // textContent(like in dom)

// // getters
console.log($('p').text()); // don't read css

// setters
$('p').text('vande matram');
console.log($('p').text());


// ------------------------
//(like innerHTML in DOM)

// getter
console.log($('p').html());

// // setter
$('p').html('Kaha ho bhagwan ji, Jaldi aa jaiye mujhe aapki sabse jada jarurat hai');
console.log($('p').html());



// ------------------------------------------------------
// attr == simmilar to getAttribute && setAttribute in dom

// getter
console.log($('a').attr('href'));
console.log($('input').attr('type'));


// setter
// $('a').attr('href','http://instagram.com');
// console.log($('a').attr('href'));

// $('input').attr('type','radio');
// console.log($('input').attr('type'));



