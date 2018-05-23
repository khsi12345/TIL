var tab = $('.tab');
var list = $('.notice, .pds');
var list_item = $('board li');

tab.attr('tabindex', 0);

tab.click(function(tab_click){
  // preventDefault는 해당 요소의 기본 이벤트를 실행 안할거야!!
  tab_click.preventDefault();

  list.removeClass('is-act');
  $(this).parent().addClass('is-act');
});

tab.keyup(function(event){
  event.preventDefault();
  if(event.keyCode == 13){
    list.removeClass('is-act');
    $(this).parent().addClass('is-act');
  }

  else{

  }
});