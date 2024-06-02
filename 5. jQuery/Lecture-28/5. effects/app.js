
// FADE OUT wale button ko click karne pe div gayab
$('#fadeout').click(function(){
    $('#container').fadeOut();
});

$('#fadein').click(function(){
    $('#container').fadeIn('slow')
})

$('#fadetoggle').click(function(){
    $('#container').fadeToggle()
});

// console.log($('#fadein').text());