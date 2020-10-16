$(function($){
$('.hamburger-btn, .close-menu').on('click', function(e) {
  e.preventDefault();

  $('body').toggleClass('overflow-hidden');
  $('.global-overlay').fadeToggle();

  $(this).toggleClass('open');
  $('.navbar').fadeToggle();
});

$('.global-overlay, .navbar .navbar-list li').on('click', function(e) {
  e.preventDefault();

  $('body').removeClass('overflow-hidden');
  $('.global-overlay').fadeOut();
  $('.navbar').fadeOut();
  $('.hamburger-btn, .close-menu').removeClass('open');
});

});