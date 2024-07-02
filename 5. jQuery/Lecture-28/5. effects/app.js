
// FADE OUT wale button ko click karne pe div gayab
$('#fadeout').click(function(){
    $('#container').fadeOut();
});

$('#fadein').click(function(){
    $('#container').fadeIn();
})

$('#fadetoggle').click(function(){
    $('#container').fadeToggle('slow')
});

// console.log($('#fadein').text());