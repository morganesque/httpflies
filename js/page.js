/*! functions.js -  This is the main code for the website */
$(document).ready(function()
{    
	var types = ['one','two','three'];

	function createHttpfly(code)
	{
		var newHttpfly = $('#original').clone().attr('id',code)
		var wings = newHttpfly.find('.the_wings');	

		var chosen = types[Math.floor(Math.random()*types.length)];
		// console.log('chosen: '+chosen);
		
		$(types).each(function(i,val)
		{
			// console.log(val);
			if (val == chosen)
			{
				// console.log('showing '+chosen)
				var shadow = $('image.'+chosen);
				var matrix = shadow.attr('transform');
				shadow.attr('opacity',0.42);
				new_shadow = shadow.clone();
				$(new_shadow[0])			
					.appendTo(wings)
					.attr('transform','scale(-1,1),translate(-334,0),'+matrix);

				wings.find('path.'+chosen)
					.removeClass('gone')
					.clone()
					.appendTo(wings)
					.attr('transform','scale(-1,1),translate(-332,0)');

				var col1 = Colors.rand('hex');
				var t1 = Colors.hex2rgb(col1); console.log(t1);
				var t2 = Colors.complement(t1.R,t1.G,t1.B); 
				var col2 = Colors.rgb2hex(t2.R,t2.G,t2.B); console.log(col2);

				console.log('  ');

				wings.find('.back').attr('fill',col1);
				wings.find('.front').attr('fill',col2);				
			} else {
				// console.log('removing '+val);
				wings.find('.'+val).remove();
			}
		});

		return newHttpfly;
	}

	$('.barnum').each(function()
	{
		// var r = 200 + Math.random() * 200;
		// $(this).height(r);
		$(createHttpfly(404)).appendTo($(this));
	});	

	$('.container .box').wookmark({offset: 4});

	$(window).on("debouncedresize", function(e) 
	{
		$('.container .box').wookmark({offset: 4});    	
	});

	// var butterfly = $('.butterfly').find('image').find('.two'); console.log(butterfly);
	
	// var shadow = $('.the_wings image.wing.two'); console.log(shadow);
	// shadow.attr('opacity',0.42);
	// var matrix = shadow.attr('transform');
	// shadow
	// 	.clone()
	// 	.appendTo($('.the_wings'))
	// 	.attr('transform','scale(-1,1),translate(-334,0),'+matrix);

	// $('.butterfly .the_wings path.wing.two')
	// 	.removeClass('gone')
	// 	.clone()
	// 	.appendTo($('.the_wings'))
	// 	.attr('transform','scale(-1,1),translate(-334,0)');

	// $('.back').attr('fill','#0000FF');
	

	

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