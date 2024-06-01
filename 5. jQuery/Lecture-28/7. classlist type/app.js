// --------------1. addClass

$('h1').first().addClass('first');
// ---------------------------------

// $('h1').last().addClass('second');
// $('h1').last().addClass('third');

$('h1').last().addClass('second third'); // same as above

// --------------------2. removeClass
// $('h1').last().removeClass('second');

$('h1').last().removeClass('second third');

// ------------------3. toggleClass(agar class hoga to remove ho jayega agar nahi hoga to add ho jayega)
$('h1').last().toggleClass('second third'); // upar wale step me remove ho chuka tha to aa jayega


// ----------------4. hasClass
console.log($('h1').last().hasClass('second')); // true (as second class is present in h1.last)

