/*! functions.js -  This is the main code for the website */
/* jshint laxcomma: true */

$(document).ready(function()
{    
    console.log('ready!');

    $('rect.gone').remove(); // hide the degbugging rectangle (for now).

    var Color = net.brehaut.Color;             // easier to use reference.
    var types = ['one','two','three'];        // types of butterfly wing.
    var huts = 0;                            // to count the httpflies.

    /*
        Factory (haha!) function for creating httpflies. 
    */
    function createHttpfly(code)
    {
        var newHttpfly = $('#original').clone().attr('id',code);         // clone the original SVG data.
        var wings = newHttpfly.find('.the_wings');                        // grab the wings part.
        var chosen = types[Math.floor(Math.random()*types.length)];        // decide which wing shape to use.
        
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
                    .attr('transform','scale(-1,1),translate(-334,0),'+matrix);

                // duplicate the wings shapes.
                wings.find('path.'+chosen)
                    .removeClass('gone')
                    .clone()
                    .appendTo(wings)
                    .attr('transform','scale(-1,1),translate(-332,0)');

                // create a random colour.
                var backColors = {};
                backColors.colours = [];

                backColors.hue = Math.floor(Math.random()*360);
                backColors.colours[0] = Color({hue:backColors.hue, saturation:1, lightness:0.5});    // the first gradient colour.
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
            if (code.match(/\dxx/)) continue;

            var hut = $('#starter').clone();
            hut.attr('id','');

            var b = hut.find('.barnum');     // grab the container for the httpfly.con
            var h = createHttpfly(code);
            b.append(h);
            // $(h).appendTo(b);
            b.attr('href','#'+code);

            boxIndex.append(hut);

            var r = Math.random() * 5;
                 if (r < 1) $(hut).addClass('w2');
            else if (r < 2) $(hut).addClass('w3');
            else if (r < 3) $(hut).addClass('w4');
            else if (r < 4) $(hut).addClass('w5');

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
        Trigger packery on the whole thing.
    
    $('.box_index').packery(
    {
         itemSelector: '.box_httpfly'
        ,gutter: 0
    });
    */

    // $('.barnum').jrumble({
    //      opacity: true
    //     ,opacityMin: .5
    //     ,speed: 50
    //     ,x:0
    //     ,y:0
    //     ,rotation:1
    // });

    /*
        What to do when a httpfly is clicked.
    */
    $('.box_index .barnum').click(function(e)
    {
        e.preventDefault();
        var code = $(this).attr('href').substr(1);
        history.pushState({number:code}, '', '#'+code);        
        showSingleHttpfly(code);
    });

    var pushHandle = {
         label:     $('.box_details .label p')
        ,name:      $('.box_details .name')
        ,latin:     $('.box_details .latin')
        ,desc:      $('.box_details .desc')
        ,tweet:     $('.box_details .tweet-this')
        ,httpfly:   $('.box_case .box_httpfly .barnum')
    };

    var backToIndex = function(e)
    {
        e.preventDefault();
        $('.box_index').show();
        $('.box_case').hide();        
        pushHandle.httpfly.empty();
        history.pushState({number:null}, '', '/');        
    };

    $('.logo').on('click',backToIndex);    
    $('.box_case .barnum').on('click',backToIndex);

    function showSingleHttpfly(code)
    {
        $('.box_index').hide();
        $('.box_case').show();

        pushHandle.label.text(code);

        var data = findData(code);

        pushHandle.name.text(data.phrase);
        pushHandle.desc.text(data.description);
        pushHandle.latin.text(data.latin);
        pushHandle.tweet.attr({href:'https://twitter.com/intent/tweet?related=httpflies,deanvipond,morganesque&hashtags=httpflies&text=this is the message&url=http://morganesque.github.io/httpflies/#'+code});
        pushHandle.httpfly.empty();
        $('#'+code).clone().appendTo(pushHandle.httpfly);
    }

    function checkState(e)
    {
        // console.log(['pushstate',e]);
        if (history.state !== null && history.state !== undefined) code  = history.state.number;
        else code = window.location.hash.substr(1);

        if (code !== '' && code !== null) showSingleHttpfly(code);
           else $('.logo').trigger('click');
    }

    $(window).on('popstate',checkState);

    checkState();
});