console.log('hi');

jQuery(document).ready(function($){
  //code
});

$(document).ready(function($){
  //code
});

$(function(){

});

$(function(){
  $('p').click(function(){ //どの要素にどんなことをしたら
    $(this).text("押したなお前");//この処理が行われる
  });

  $('.codeArea').click(function(){
    $(this).css('color','#0ee'),css('background','#333');
  });

  $('.js-addClass').click(function(){
    $('.js-addClass').addClass('add');
  });
});
