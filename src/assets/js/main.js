$(function($){
$('.hamburger-btn, .close-menu').on('click', function(e) {
  e.preventDefault();

  $('body').toggleClass('overflow-hidden');
  $('.global-overlay').fadeToggle();

  $(this).toggleClass('open');
  $('.navbar').fadeToggle();
});

$('.global-overlay').on('click', function(e) {
  e.preventDefault();

  $('body').removeClass('overflow-hidden');
  $(this).fadeOut();
  $('.navbar').fadeOut();
  $('.hamburger-btn, .close-menu').removeClass('open');
});
});