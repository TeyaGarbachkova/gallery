$(function($){
$('.hamburger-btn, .close-menu').on('click', function(e) {
  e.preventDefault();

  $('body').toggleClass('overflow-hidden');
  $('.global-overlay').fadeToggle();

  $(this).toggleClass('open');
  $('.navbar').fadeToggle();
});

$('.navbar li').on('click', function(e) {
  let mq = window.matchMedia( "(max-width: 767px)" );
  if (mq.matches) {
    $('body').removeClass('overflow-hidden');
      $('.global-overlay').fadeOut();
      $('.navbar').fadeOut();
      $('.hamburger-btn, .close-menu').removeClass('open');
  }
});


$('.global-overlay, .navbar-open li').on('click', function(e) {
  e.preventDefault();

  $('body').removeClass('overflow-hidden');
  $('.global-overlay').fadeOut();
  $('.navbar').fadeOut();
  $('.hamburger-btn, .close-menu').removeClass('open');
});

});