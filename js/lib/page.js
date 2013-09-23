/*! functions.js -  This is the main code for the website */
/* jshint laxcomma: true */

// console.log('I\'m here');

(function(){

    var Color = net.brehaut.Color;                      // easier to use reference.

    (function(){
        var hue = Math.random()*360;
        var colours = [];
        colours[0] = Color({hue:hue, saturation:0.9, lightness:0.65});    
        colours[1] = colours[0].shiftHue((360/data.length)*5).darkenByAmount(0.3);                            
        var stops = $('#teapot').find('stop'); 
        $(stops[1]).attr('style','stop-color:'+colours[0].toCSS()+';stop-opacity:1');                
        $(stops[0]).attr('style','stop-color:'+colours[1].toCSS()+';stop-opacity:1');
    })();

    // console.log('and in here');

    if (!Modernizr.inlinesvg)
    {
        // console.log('they dont support inlinesvg');
        $('.box_sorry').show(); 
        return;
    }

    $('rect.debug').remove();           // hide the degbugging rectangle (for now).
    $('.box_case_container').hide();    // hide the single httpfly container.            
    
    var types = ['five','four','three','two','one'];    // types of butterfly wing.
    var huts = 0;                                       // to count the httpflies.

    var original = $('#original');      // grab the original one once.

    /*
        Factory (haha!) function for creating httpflies. 
    */
    function createHttpfly(code,it)
    {
        var newHttpfly = original.clone().attr('id',code);  // clone the original SVG data.
        var butterfly = newHttpfly.find('.butterfly');      // grab the butterfly part.
        var wings = newHttpfly.find('.the_wings');          // grab the wings part.
        
        // var c = parseInt(code.substr(0,1),0)-1;             // first number of the code.
        var chosen = types[data[it].type];                  // decide which wing shape to use.

        // eeek magic numbers - just aligning the shapes a bit more nicely.
        if (chosen == 'four') $(butterfly).attr('transform','translate(0 30)');
        if (chosen == 'three') $(butterfly).attr('transform','translate(0 40)');
        if (chosen == 'two') $(butterfly).attr('transform','translate(0 30)');
        if (chosen == 'one') $(butterfly).attr('transform','translate(0 40)');

        // newHttpfly.addClass('c'+c);
        newHttpfly.addClass('chosen'+chosen);
                
        // and again - how far to the right to shift the new wings.
        trans = 414;

        // filter and modify the shapes needed for the httpfly.
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
                var theColours = makeNewColours(data[it].hue);

                // apply the back gradient.
                var grad = newHttpfly.find('.back-gradient');
                var stops = $(grad).find('stop'); 
                $(grad).attr('id','back-grad'+huts);
                $(stops[1]).attr('style','stop-color:'+theColours[0].toCSS()+';stop-opacity:1');
                $(stops[0]).attr('style','stop-color:'+theColours[1].toCSS()+';stop-opacity:1');
                wings.find('.back').attr('fill','url(#back-grad'+huts+')');                
                
                // apply the wing gradient.
                grad = newHttpfly.find('.wing-gradient');            
                stops = $(grad).find('stop'); 
                $(grad).attr('id','wing-grad'+huts);                
                $(stops[1]).attr('style','stop-color:'+theColours[2].toCSS()+';stop-opacity:1');                
                $(stops[0]).attr('style','stop-color:'+theColours[3].toCSS()+';stop-opacity:1');
                wings.find('.front').attr({
                    'fill': 'url(#wing-grad'+huts+')'
                    ,'opacity': 0.76
                });

                // apply the body gradient.
                grad = newHttpfly.find('.body-gradient');            
                stops = $(grad).find('stop'); 
                $(grad).attr('id','body-grad'+huts);                
                $(stops[1]).attr('style','stop-color:'+theColours[4].toCSS()+';stop-opacity:1');                
                $(stops[0]).attr('style','stop-color:'+theColours[5].toCSS()+';stop-opacity:1');
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

    var makeNewColours = function(hue)
    {
        var colours = [];
        // the first gradient colour (center of background)
        colours[0] = Color({hue:hue, saturation:0.9, lightness:0.65});    
        // the second gradient colour (outer background)
        colours[1] = colours[0].shiftHue((360/data.length)*5).darkenByAmount(0.3);                            
        // top color of front wing gradient
        colours[2] = colours[0].shiftHue(-30).darkenByAmount(0.5);
        // bottom colour of front wing gradient.
        colours[3] = colours[2].darkenByAmount(0.3);
        // bottom colour of body gradient.
        colours[4] = colours[0].shiftHue(+60);
        // top color of body gradient.
        colours[5] = colours[4].darkenByAmount(0.5);

        return colours;
    };

    var boxIndex = $('.box_index');
    var starter = $('#starter');

    var createAllTheHttpflies = function()
    {
        for (var i = data.length - 1; i >= 0; i--) 
        {
            var code = data[i].code;

            if (code == '418') continue; // don't do this one.

            var hut = starter.clone();
            hut.attr('id','');

            var b = hut.find('.barnum');     // grab the container for the httpfly.con
            var h = createHttpfly(code,i);
            b.prepend(h);
            // $(h).appendTo(b);
            b.attr('href','#'+code);

            hut.attr('data-hue',data[i].hue);
            if (code == '404') hut.css({'display':'none'});

            boxIndex.append(hut);

            var r = data[i].size;
                 if (r < 1) hut.addClass('w2');
            else if (r < 2) hut.addClass('w3');
            // else if (r < 3) $(hut).addClass('w4');

            var l = hut.find('.label p'); l.text(code);

            // $(createHttpfly(404)).appendTo(b);     // stick in the httpfly.
            // $(hut).find('.label p').text(code);
        }    
    };

    createAllTheHttpflies();

    
    starter.remove(); // Get rid of the placeholder HTML I put in there.

    /*
        What to do when a httpfly is clicked.
    */
    $('.box_index .barnum').on('click',function(e)
    {
        e.preventDefault();        
        var code = $(this).attr('href').substr(1);
        history.pushState({number:code}, '', '#'+code);        
        showSingleHttpfly(code,true);
        ga('send', '#'+code, 'view');
    });

    var pushHandle = {
         label:     $('#details .label p')
        ,name:      $('#details .name')
        ,latin:     $('#details .latin')
        ,desc:      $('#details .desc')
        ,tweet:     $('#details .tweet-this')
        ,httpfly:   $('.box_case .box_httpfly .barnum')
    };    

    $('.box_arrows .left').on('click',function(e)
    {
        e.preventDefault();
        var code = pushHandle.label.text();
        var newdata = findPrev(code);
        history.pushState({number:newdata.code}, '', '#'+newdata.code);        
        showSingleHttpfly(newdata.code,false);
        ga('send', 'pageview', '#'+newdata.code);
    });

    var goNextOne = function(e)
    {
        e.preventDefault();
        var code = pushHandle.label.text();
        var newdata = findNext(code);
        history.pushState({number:newdata.code}, '', '#'+newdata.code);        
        showSingleHttpfly(newdata.code,false);
        ga('send', 'pageview', '#'+newdata.code);
    };

    var backToIndex = function(e)
    {
        // console.log('showing: backToIndex');

        if (e !== undefined) e.preventDefault();
        $('.box_index').show();
        $('.box_case_container').hide();                
        pushHandle.httpfly.find('svg').remove();    // got to make sure there's only one showing or the unique ID's don't work.
        if (e !== undefined) history.pushState({number:0}, '', '/');        
        ga('send', 'pageview', '/');

        // window.scrollTo(0,0);
    };

    $('.box_arrows .right').on('click',goNextOne);

    $('.logo').on('click',backToIndex);    
    $('.box_case .barnum').on('click',goNextOne);

    function showSingleHttpfly(code,scroll)
    {
        // console.log('showing single: '+code);

        $('.box_index').hide();
        $('.box_case_container').show();

        pushHandle.label.text(code);

        var data = findData(code);

        if (data === undefined) window.location = '#404';

        pushHandle.name.text(data.phrase);
        pushHandle.desc.text(data.description);
        pushHandle.latin.text(data.latin);

        var url = 'http://httpflies.com/%23'+code;
        var message = 'Take a look at HTTPfly '+code+': '+data.phrase+' ['+data.latin+'] ';
        
        pushHandle.tweet.attr({href:'https://twitter.com/intent/tweet?related=httpflies,deanvipond,morganesque&hashtags=httpflies&text='+message+'&url='+url});

        pushHandle.httpfly.find('svg').remove();

        var hash = code; if (code == 418) hash = 'teapot';

        var svg = $('#'+hash).clone();

        svg.find('.back-gradient').attr('id','back-chosen');
        svg.find('.wing-gradient').attr('id','wing-chosen');
        svg.find('.body-gradient').attr('id','body-chosen');

        svg.find('.back').attr('fill','url(#back-chosen)');                
        svg.find('.front').attr('fill','url(#wing-chosen)');
        svg.find('.the_body .body-shape').attr('fill','url(#body-chosen)');

        svg.attr('id','').prependTo(pushHandle.httpfly);

        // var svg = pushHandle.httpfly.find('svg');
        // svg.attr('preserveAspectRatio',"xMidYMin meet");
        // $(svg).find('.butterfly').attr('transform','translate(0 0)');

        if (scroll) window.scrollTo(0,0);
    }

    var firstCheckTimer = setTimeout(function()
    {
        // console.log('timeout checkstate');
        checkState();
    },1000);

    function checkState(e)
    {
        clearTimeout(firstCheckTimer);

        // console.log('checking state!');
        if (history.state !== null && history.state !== undefined) code  = history.state.number;
        else code = window.location.hash.substr(1);

        if (code && code !== '' && code !== null && code !== undefined) 
            showSingleHttpfly(code,true);
        else 
            backToIndex();
    }

    $(window).on('popstate',function()
    {
        // console.log('popstate happened!');
        checkState();
    });

    FastClick.attach(document.body);

})();