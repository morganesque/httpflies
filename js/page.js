/*! functions.js -  This is the main code for the website */

$(document).ready(function()
{    
	$('rect.gone').remove(); // hide the degbugging rectangle (for now).

	var Color = net.brehaut.Color; 			// easier to use reference.
	var types = ['one','two','three'];		// types of butterfly wing.
	var huts = 0;							// to count the httpflies.

	/*
		Factory (haha!) function for creating httpflies. 
	*/
	function createHttpfly(code)
	{
		var newHttpfly = $('#original').clone().attr('id',code); 		// clone the original SVG data.
		var wings = newHttpfly.find('.the_wings');						// grab the wings part.
		var chosen = types[Math.floor(Math.random()*types.length)];		// decide which wing shape to use.
		
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

				// create a random colour.
				var hue = Math.floor(Math.random()*360);
				var col = Color({hue:hue, saturation:1, lightness:0.5})	// the first gradient colour.
				var col3 = col.shiftHue(45);							// the other gradient colour.

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

				var col2 = col.darkenByAmount(0.45);					// wing mask colour.
				wings.find('.front').attr('fill',col2.toString());				

				huts++; // count those httpflies.

			} else {
				// remove the other shapes from the SVG.
				wings.find('.'+val).remove();
			}
		});

		return newHttpfly;
	}

	$('.container .box').each(function(i)
	{
		var ratio = 340/290; // this is the ratio of the original SVG (a magic number - yuk!)

		// var r = Math.random() * 5;
		var r = i;
			 if (r < 1) $(this).addClass('w2');
		else if (r < 2) $(this).addClass('w3');
		else if (r < 3) $(this).addClass('w4');
		else if (r < 4) $(this).addClass('w5');

		var w = $(this).width();
		$(this).height((w/ratio)+20); 		// resize the height based on the width.

		var b = $(this).find('.barnum'); 	// grab the container for the httpfly.

		$(createHttpfly(404)).appendTo(b); 	// stick in the httpfly.
		
	});

	/*
		Trigger packery on the whole thing.
	*/
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
});