/*! functions.js -  This is the main code for the website */

$(document).ready(function()
{    

	var Color = net.brehaut.Color;	

	$('rect.gone').remove();

	var types = ['one','two','three'];

	var huts = 0;

	function createHttpfly(code)
	{
		var newHttpfly = $('#original').clone().attr('id',code)
		var wings = newHttpfly.find('.the_wings');	
		var chosen = types[Math.floor(Math.random()*types.length)];
		
		$(types).each(function(i,val)
		{
			if (val == chosen)
			{				
				// duplicate the shadow for the chosen wing.
				var shadow = $('image.'+chosen);
				var matrix = shadow.attr('transform');
				shadow.attr('opacity',0.22);
				new_shadow = shadow.clone();
				$(new_shadow[0])			
					.appendTo(wings)
					.attr('transform','scale(-1,1),translate(-334,0),'+matrix);

				// duplicate the wings shapes.
				wings.find('path.'+chosen)
					.removeClass('gone')
					.clone()
					.appendTo(wings)
					.attr('transform','scale(-1,1),translate(-332,0)');

				var hue = Math.floor(Math.random()*360);
				var col = Color({hue:hue, saturation:1, lightness:0.5})	
				var col3 = col.shiftHue(45);

				// grab the gradient.
				var grad = newHttpfly.find('.gradient');
				// grab the stops.
				var stops = $(grad).find('stop'); 
				// make sure the new gradient gets a unique id.
				$(grad).attr('id','grad'+huts);
				// change the gradient.
				$(stops[1]).attr('style','stop-color:'+col3.toCSS()+';stop-opacity:1');
				$(stops[0]).attr('style','stop-color:'+col.toCSS()+';stop-opacity:1');
				// apply the gradient to the background wing.
				wings.find('.back').attr('fill','url(#grad'+huts+')');

				var col2 = col.darkenByAmount(0.45);
				wings.find('.front').attr('fill',col2.toString());				

				huts++;

			} else {
				// remove the other shapes from the SVG.
				wings.find('.'+val).remove();
			}
		});

		return newHttpfly;
	}

	// $('.barnum').each(function()
	// {		
	// 	$(createHttpfly(404)).appendTo($(this));
	// });	

	$('.container .box').each(function(i)
	{
		var ratio = 340/290;

		// var r = Math.random() * 5;
		var r = i;
		if (r < 1) $(this).addClass('w2');
		else if (r < 2) $(this).addClass('w3');
		else if (r < 3) $(this).addClass('w4');
		else if (r < 4) $(this).addClass('w5');

		var w = $(this).width();
		$(this).height((w/ratio)+20);

		var b = $(this).find('.barnum');

		$(createHttpfly(404)).appendTo(b);
		
	});

	$('.container').packery(
	{
		 itemSelector: '.box'
		,gutter: 0
	});

	// $('.barnum').jrumble({
	// 	 opacity: true
	// 	,opacityMin: .5
	// 	,speed: 50
	// 	,x:0
	// 	,y:0
	// 	,rotation:1
	// });

	$('.barnum').click(function(e)
	{
		e.preventDefault();
		var time = 2000, httpfly = $(this);
		$('.box').fadeOut(time);
		// httpfly.trigger('startRumble')
		httpfly.closest('.box').stop().show();

		setTimeout(function()
		{
			console.log(httpfly.closest('.box'));
			// httpfly.trigger('stopRumble');			
			httpfly.closest('.box').animate({
				 top:0
				,left:0				
				,height:600
				,width:'100%'
			});

		},time);		
	});


	$(createHttpfly(404)).appendTo('.it');
	
	// $('.container .box').wookmark();    	

	// $(window).on("debouncedresize", function(e) 
	// {
	// 	$('.container .box').wookmark();    	
	// });

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