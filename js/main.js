$(document).ready(function(){
		$('#nav').slicknav();

	
		$('.portfolio_items').mixItUp();
		  $('#quote-carousel').carousel({
    pause: true,
    interval: 4000,
  });
  
  $("ul#nav ul.sub-menu").css('opacity', 0.0);
$("ul#nav li").hover(

function()  {
	$(this).find(".sub-menu").stop().animate({opacity:1});
},


function()  {
	$(this).find(".sub-menu").stop().animate({opacity:0});
});	



$("ul#nav ul ul.second-sub-menu").css('opacity', 0.0);
$("ul#nav li li").hover(

function()  {
	$(this).find(".second-sub-menu").stop().animate({opacity:1});
},


function()  {
	$(this).find(".second-sub-menu").stop().animate({opacity:0});
});
});
