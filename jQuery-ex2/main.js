/* global $ */
$(function(){
  $('#accordion dd').hide();
  
  $('#accordion dt').on('click', function(){
    $(this).next().slideToggle();
  });
});