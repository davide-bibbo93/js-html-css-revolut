// funzione che al click del dropdown attiva menu nascosto.
$('.dropdown').click(function() {
  $(this).find('.hide-menu').toggleClass('active');
});

// funzione con il mouseleave in cui una volta cliccato il menu nascosto, questo si rimuove.
$('.hide-menu').mouseleave(function () {
  $(this).removeClass('active');
});
