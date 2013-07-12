/*! functions.js -  This is the main code for the website */
/* jshint laxcomma: true */

$(document).ready(function()
{    
    $('rect.debug').remove(); // hide the degbugging rectangle (for now).
    $('.box_case_container').hide(); // hide the         

    var Color = net.brehaut.Color;                      // easier to use reference.
    var types = ['five','four','three','two','one'];    // types of butterfly wing.
    var huts = 0;                                       // to count the httpflies.

    /*
        Factory (haha!) function for creating httpflies. 
    */
    function createHttpfly(code)
    {
        var newHttpfly = $('#original').clone().attr('id',code);         // clone the original SVG data.
        var butterfly = newHttpfly.find('.butterfly'); 
        var wings = newHttpfly.find('.the_wings');                        // grab the wings part.
        // var chosen = types[Math.floor(Math.random()*types.length)];        // decide which wing shape to use.
        
        var c = parseInt(code.substr(0,1),0)-1;
        var chosen = types[c];        // decide which wing shape to use.

        // eeek magic numbers - just aligning the shapes a bit more nicely.
        if (c == 4) $(butterfly).attr('transform','translate(0 40)');
        if (c == 3) $(butterfly).attr('transform','translate(0 30)');
        if (c == 2) $(butterfly).attr('transform','translate(0 40)');
                
        // how far to the right to shift the new wings.
        trans = 414;

        $(types).each(function(i,val)
        {
            if (val == chosen)
            {                
                // duplicate the shadow for the chosen wing.
                var shadow = $('image.'+chosen);
                var matrix = shadow.attr('transform');
                // shadow.attr('opacity',0.22); // I've put this back into the SVG code.
                new_shadow = shadow.clone();
                $(new_shadow[0])            
                    .appendTo(wings)
                    .attr('transform','scale(-1,1),translate(-'+trans+',0),'+matrix);

                // duplicate the wings shapes.
                wings.find('path.'+chosen)
                    .removeClass('gone')
                    .clone()
                    .appendTo(wings)
                    .attr('transform','scale(-1,1),translate(-'+trans+',0)');

                // create a random colour.
                var backColors = {};
                backColors.colours = [];

                backColors.hue = Math.floor(Math.random()*360);
                backColors.colours[0] = Color({hue:backColors.hue, saturation:0.9, lightness:0.45});    // the first gradient colour.
                backColors.colours[1] = backColors.colours[0].shiftHue(45);                            // the other gradient colour.

                // grab the gradient.
                var grad = newHttpfly.find('.back-gradient');
                // grab the stops.
                var stops = $(grad).find('stop'); 
                // make sure the new gradient gets a unique id.
                $(grad).attr('id','back-grad'+huts);
                // change the gradient.
                $(stops[1]).attr('style','stop-color:'+backColors.colours[0].toCSS()+';stop-opacity:1');
                $(stops[0]).attr('style','stop-color:'+backColors.colours[1].toCSS()+';stop-opacity:1');

                // apply the gradient to the background wing.
                wings.find('.back').attr('fill','url(#back-grad'+huts+')');
                
                grad = newHttpfly.find('.wing-gradient');            
                stops = $(grad).find('stop'); 
                $(grad).attr('id','wing-grad'+huts);
                backColors.colours[2] = backColors.colours[0].shiftHue(-90).darkenByAmount(0.2);
                $(stops[1]).attr('style','stop-color:'+backColors.colours[2].toCSS()+';stop-opacity:1');
                backColors.colours[3] = backColors.colours[2].darkenByAmount(0.2);
                $(stops[0]).attr('style','stop-color:'+backColors.colours[3].toCSS()+';stop-opacity:1');
                wings.find('.front').attr({
                    'fill': 'url(#wing-grad'+huts+')'
                    ,'opacity': 0.76
                });

                grad = newHttpfly.find('.body-gradient');            
                stops = $(grad).find('stop'); 
                $(grad).attr('id','body-grad'+huts);
                backColors.colours[4] = backColors.colours[0].shiftHue(-180);
                $(stops[1]).attr('style','stop-color:'+backColors.colours[4].toCSS()+';stop-opacity:1');
                backColors.colours[5] = backColors.colours[4].darkenByAmount(0.5);
                $(stops[0]).attr('style','stop-color:'+backColors.colours[5].toCSS()+';stop-opacity:1');
                newHttpfly.find('.the_body .body-shape').attr({
                    'fill': 'url(#body-grad'+huts+')'
                });    

                huts++; // count those httpflies.

            } else {
                // remove the other shapes from the SVG.
                wings.find('.'+val).remove();
            }
        });

        return newHttpfly;
    }

    var boxIndex = $('.box_index');

    var createAllTheHttpflies = function()
    {
        for (var i = data.length - 1; i >= 0; i--) 
        {
            var code = data[i].code;

            var hut = $('#starter').clone();
            hut.attr('id','');

            var b = hut.find('.barnum');     // grab the container for the httpfly.con
            var h = createHttpfly(code);
            b.prepend(h);
            // $(h).appendTo(b);
            b.attr('href','#'+code);

            boxIndex.append(hut);

            var r = Math.random() * 3;
                 if (r < 1) $(hut).addClass('w2');
            else if (r < 2) $(hut).addClass('w3');
            // else if (r < 3) $(hut).addClass('w4');

            var l = $(hut).find('.label p'); l.text(code);

            // $(createHttpfly(404)).appendTo(b);     // stick in the httpfly.

            // $(hut).find('.label p').text(code);
        }    
    };

    createAllTheHttpflies();

    /*
        Get rid of the placeholder HTML I put in there.
    */
    $('#starter').remove();
    /*
        What to do when a httpfly is clicked.
    */
    $('.box_index .barnum').on('click',function(e)
    {
        e.preventDefault();
        var code = $(this).attr('href').substr(1);
        history.pushState({number:code}, '', '#'+code);        
        showSingleHttpfly(code);
        ga('send', '#'+code, 'view');
    });

    var pushHandle = {
         label:     $('.box_details .label p')
        ,name:      $('.box_details .name')
        ,latin:     $('.box_details .latin')
        ,desc:      $('.box_details .desc')
        ,tweet:     $('.box_details .tweet-this')
        ,httpfly:   $('.box_case .box_httpfly .barnum')
    };    

    $('.box_arrows .left').on('click',function(e)
    {
        e.preventDefault();
        var code = pushHandle.label.text();
        var newdata = findPrev(code);
        history.pushState({number:newdata.code}, '', '#'+newdata.code);        
        showSingleHttpfly(newdata.code);
        ga('send', 'pageview', '#'+newdata.code);
    });

    $('.box_arrows .right').on('click',function(e)
    {
        e.preventDefault();
        var code = pushHandle.label.text();
        var newdata = findNext(code);
        history.pushState({number:newdata.code}, '', '#'+newdata.code);        
        showSingleHttpfly(newdata.code);
        ga('send', 'pageview', '#'+newdata.code);
    });

    var backToIndex = function(e)
    {
        e.preventDefault();
        $('.box_index').show();
        $('.box_case_container').hide();        
        pushHandle.httpfly.empty();
        history.pushState({number:null}, '', '/');        
        ga('send', 'pageview', '/');
    };

    $('.logo').on('click',backToIndex);    
    $('.box_case .barnum').on('click',backToIndex);

    function showSingleHttpfly(code)
    {
        console.log('showing single: '+code);

        $('.box_index').hide();
        $('.box_case_container').show();

        pushHandle.label.text(code);

        var data = findData(code);

        if (data === undefined) window.location = '#404';

        pushHandle.name.text(data.phrase);
        pushHandle.desc.text(data.description);
        pushHandle.latin.text(data.latin);

        var url = 'http://httpflies/%23'+code;
        var message = 'Take a look at HTTPfly '+code+': '+data.phrase+' ['+data.latin+'] '+url;
        
        pushHandle.tweet.attr({href:'https://twitter.com/intent/tweet?related=httpflies,deanvipond,morganesque&hashtags=httpflies&text='+message+'&url='+url});

        pushHandle.httpfly.find('svg').remove();
        $('#'+code).clone().prependTo(pushHandle.httpfly);

        var svg = pushHandle.httpfly.find('svg');
        // svg.attr('preserveAspectRatio',"xMidYMin meet");
        // $(svg).find('.butterfly').attr('transform','translate(0 0)');
    }

    var firstCheckTimer = setTimeout(function()
    {
        console.log('timeout checkstate');
        checkState();
    },3000);

    function checkState(e)
    {
        clearTimeout(firstCheckTimer);

        console.log('checking state!');
        if (history.state !== null && history.state !== undefined) code  = history.state.number;
        else code = window.location.hash.substr(1);

        if (code !== '' && code !== null && code !== undefined) showSingleHttpfly(code);
           else $('.logo').trigger('click');
    }

    $(window).on('popstate',checkState);

    FastClick.attach(document.body);
});