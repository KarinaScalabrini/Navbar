$(function(){
  
  $('li').on('click', function(){

      $(this).find('.menu2').toggle();
      $(this).find('.bi').css("color","#E9D758");
      
        return ;
   });

   $('article').on('click', function(){
    debugger
    var img = $(this).find('img').attr('src');
    $('.modalImgBox img').attr('src', img);
    $('.modalImg').fadeIn('fast');
    $('.modalImgBox').fadeIn('fast');

    

   });

   $('.modalImg').bind('click', function(){
    $(this).fadeOut('fast');
    $('modalImgBox').fadeOut('fast');
});
});