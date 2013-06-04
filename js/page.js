/*! functions.js -  This is the main code for the website */
$(document).ready(function()
{    

	$('.container .box').each(function()
	{
		// var r = 200 + Math.random() * 200;
		// $(this).height(r);
		$('#original').clone().attr('id','').appendTo($(this));
	});

	$('.container .box').wookmark({offset: 4});

	// $('.wing3-mask').clone().attr('transform','translate(265,0) scale(-1,1)').attr('fill','blue').appendTo('.butterfly');

	// for (var i = 1; i <= 91; i++) 
	// {
	// 	$('#starter').clone().attr('id','').addClass('bg-'+i).appendTo('.main');
	// }

	// var minw = 999999;
	// $('.canvas').each(function()
	// {
	// 	var w = $(this).width();
	// 	if (w < minw) minw = w;
	// });

	// $('.canvas').height(minw);

	// $('.canvas').on('mouseenter',function()
	// {
	// 	TweenMax.to($(this).find('.wings'), .5, {css:{fill:'#FFF'}});
	// 	TweenMax.to($(this).find('.body'), .5, {css:{fill:'#0F0'}});
	// 	TweenMax.to($(this).find('.wing-circle-bot'), .5, {css:{opacity:0.9, fill:'#00F'}});
	// 	TweenMax.to($(this).find('.wing-circle-top'), .5, {css:{opacity:0.9, fill:'#F00'}});
	// });

	// $('.canvas').on('mouseleave',function()
	// {
	// 	TweenMax.to($(this).find('.wings'), .5, {css:{fill:'#000'}});
	// 	TweenMax.to($(this).find('.body'), .5, {css:{fill:'#000'}});
	// 	TweenMax.to($(this).find('.wing-circle-bot'), .5, {css:{opacity:0.2, fill:'#FFF'}});
	// 	TweenMax.to($(this).find('.wing-circle-top'), .5, {css:{opacity:0.2, fill:'#FFF'}});
	// });

	// $('.wing-circle-bot').css({opacity:0.5, fill:'#FFF'});
	// $('.wing-circle-top').css({opacity:0.5, fill:'#FFF'});

	// $('.wings').css({fill:'blue'});
	// $('.body').css({fill:'red'});
	
    
});