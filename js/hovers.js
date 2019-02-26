$('div.playerbox').hover(
  function() {
    $('#mainpic').fadeOut(100);
    $('.playerpic' + $(this).attr('id')).fadeIn(100);
  },
  function() {
    $('#mainpic').fadeIn(100);
    $('.playerpic' + $(this).attr('id')).fadeOut(100);

  }
);
