$('a[href*="#"]').click(function () {
  var elmHash = $(this).attr('href');
  var pos = $(elmHash).offset().top - 80;
  $('body,html').animate({scrollTop: pos}, 500);
  return false;
});
$('#nav_burger nav ul li a[href]').on('click', function(event) {
  $('.burger_box').trigger('click');
});