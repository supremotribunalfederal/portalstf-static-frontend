import $ from 'jquery';

$('.dropdown-toggle').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeIn(100);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeOut(100);
});