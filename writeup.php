<?php
$xml = false;
if ($xml): // xml
header('Content-Type: text/xml'); ?>
<!DOCTYPE html [<!ENTITY copy "&#169;">] >
<?php else: ?>
<!DOCTYPE html>
<?php endif; ?>
<!--[if lt IE 7 ]> <html class="ie ie6 no-js" xmlns="http://www.w3.org/1999/xhtml"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie ie7 no-js" xmlns="http://www.w3.org/1999/xhtml"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie ie8 no-js" xmlns="http://www.w3.org/1999/xhtml"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie ie9 no-js" xmlns="http://www.w3.org/1999/xhtml"> <![endif]-->
<!--[if gt IE 9]><!--><html class="no-js" xmlns="http://www.w3.org/1999/xhtml"><!--<![endif]-->
<head>
    <title>HTTPFlies</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta http-equiv="content-type" content="application/xhtml+xml; charset=utf-8" />    
    <meta name="title" content="HTTPFlies - Some Words About The Thing" />
    <meta name="description" content="A brief description of the project, process and technologies we used." />	
    <meta name="google-site-verification" content="" />
    <meta name="author" content="Tom Morgan &amp; Dean Vipond" />
    <meta name="Copyright" content="Copyright Tom Morgan 2011. All Rights Reserved." />
    <meta name="DC.title" content="HTTPFlies - Some Words About The Thing" />
    <meta name="DC.creator" content="Tom Morgan &amp; Dean Vipond" />    
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />    
    <meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />    
    <link rel="image_src" href="" />
    <link rel="shortcut icon" href="favicon.ico" />
    <link rel="apple-touch-icon" href="icons/apple-touch-icon.png" />
    <link href='http://fonts.googleapis.com/css?family=Lato:300,400,700,300italic' rel='stylesheet' type='text/css'>
    <style type="text/css">
    <?php if ($xml) echo '<![CDATA['."\n"; ?>
    body {font-family: 'Lato', Georgia, Arial, sans-serif;}
    <?php include('css/writeup.css'); ?>
    <?php if ($xml) echo ']]>'."\n"; ?>
    </style>
    <script type="text/javascript" charset="utf-8"><?php include('js/modernizr.js'); ?></script>
</head>
<body>       
    <header class="box_header">
        <?php /* <div class="logo"><a href="#" id="index-link"><?php include('./svg/logo.svg'); ?></a></div> */ ?>
        <a href="/" class="logo"><?php include('./svg/logo.svg'); ?></a>
        <h1 class="beta large-text">httpflies</h1>
        <hr class="line"/>
        <p class="sub">A Miscellany Of <span class="nw">Http Status Codes</span></p>
    </header>          
    <section class="box_page">  

        <h2>Initial Idea</h2>

        <p>Like a lot of ideas, HTTPflies appeared almost entirely by accident. I saw a tweet a few months ago, from someone who had seen an obscure HTTP status code. The tweet jokingly said something like, &lsquo;you rarely see this in the wild&rsquo;. The notion of &lsquo;rare code&rsquo; got me thinking.</p>

        <p>This got me thinking about the documentation and classification of animals &ndash; could we do something fun, along these lines, but for code? So Tom and I started chatting about butterfly collections, and whether we could do something to experiment with generating multiple versions of something, from a few basic graphics.</p>

        <h2>Why use SVG</h2>

        <ol start="1">
            <li>SVG is cool.</li>

            <li>Scalable graphics are good and responsive.</li>

            <li>When embedded into a page it can be manipulated with tools like jQuery (just like HTML can be).</li>

            <li>It can be like a library (a relatively small download which is then reused to create far more complex things through manipulation and combination of the parts).</li>

            <li>It forms a nice half-way point between hand-crafted imagery and code-created imagery, in that some parts can be done by hand but can then be manipulated by code.</li>
        </ol>

        <p>That last point is interesting. There&rsquo;s something in that about how &ldquo;designers&rdquo; and &ldquo;coders&rdquo; work together and how SVG forms an interesting span across that gap. You could create the graphics entirely in code (with combination of squares and circles etc) but I like the fact that an artist can create something in illustrator and that it pops out in a form which is perfect to be coded with. With PSD&rsquo;s etc you have to translate the pixels into code, but with SVG the graphic is already code. Not that SVG would be good to do web design in, but just it&rsquo;s an interesting half-way point somehow.</p>

        <h2>Library of shapes</h2>

        <p>We reduced the anatomy of a butterfly down to some component parts. Deciding that a single body would suffice and that for each wing-type we&rsquo;d want at least two layers. As every school-child knows you only need to paint half a butterfly and so it was here with one set of wings being enough to create a full butterfly. Once we had these components in place we could pick out the wings shapes we wanted, duplicate and re-colour the different parts and present as many different butterflies as we needed all with pure code. Using SVG as a repository of reusable elements like this seems like it might have interesting possiblities for the future.</p>

        <h2>Colours</h2>

        <p>We wanted the colours to be generated kind of randomly, but it soon became clear that some combinations and types of colours were pretty hideous. We needed some logic to ensure the HTTPflies were all beautiful, and harmonious, while at the same time not too similar to others. Tom was able to omit certain colours and make some rules around how we worked out each HTTPfly&rsquo;s palette. Also, it was important that after each HTTPfly&rsquo;s palette was assigned, it would be the same each time (and not randomly created on page refresh).</p>

        <h2>Download Size</h2>

        <p>As one of the main aims was to create a lot out of very little it was important that the initial download of the site would be as small as possible. Not only that but also it was vital that we made as much of that download as possible.</p>

        <p>The normal routine of concatenating and minifying CSS and JavaScript files was still important but as this was to be a single page website it became clear that we could simply serve the entire thing as a single HTML file which could then be served (and gzipped in transit) and not need to be added to with any other external files in order to support further interactions. Not only this but apart from the SVG code we were including inline we could also reference other (smaller) graphics via embedded data URIs meaning even the incidental imagery was included in the same file.</p>

        <p>Now, this would obviously not always for desirable for larger websites (where caching benefits kick in) but for an experiment like this it seemed to fit nicely within the overall idea, to serve the whole thing as one file.</p>

        <span />

        <p>So we hope you like it. It was great fun to make.</p>

        <h2>Credits</h2>

        <p>We need to give credit to a number of giants on whose shoulders etc etc...</p>

        <ol>
            <li>That <a href="https://github.com/andreineculau">wonderful fellow</a> who created the <a href="https://github.com/andreineculau/know-your-http-well/blob/master/js/status-codes.json">JSON with all the status codes in it</a>.</li>

            <li>The <a href="http://keith-wood.name/">nice guy</a> who made the <a href="http://keith-wood.name/svg.html">jQuery library which makes it possible to work with SVG</a> (and also the <a href="https://github.com/micha149">bloke</a> who <a href="https://github.com/kbwood/svg/pull/8">updated that code to solve a problem</a> I was having).</li>

            <li>The <a href="http://brehaut.net/about/">lovely chap</a> who created the <a href="https://github.com/brehaut/color-js">excellent JavaScript colour library</a> we used.</li>

            <li>The phenonimnal <a href="https://developer.mozilla.org/en-US/docs/Web/SVG">MDN SVG documentation</a> which is awesome and usable.</li>

            <li>Copious people on <a href="http://stackoverflow.com/search?q=svg">StackOverflow</a> who had already asnwered every question I ever thought of asking.</li>

        </ol>

        <h2>A quick not on xHTML</h2>      

        <p>There was a moment in the middle where I thought I was going to have to serve the whole thing as xHTML. This came from a problem I had with my version of Safari (5 &mdash; for some reason) and I found a <a href="http://stackoverflow.com/questions/4504942/mobile-safari-svg-problem">question on stackoverflow</a> which seemed to point to this as the solution. I did quite a lot of work to make everything xHTML compatible (escaping various characters &amp; using CDATA blocks for JS and CSS) and it was only when I implemented <a href="http://modernizr.com/">Modernizr</a> at the end to check for compatibitly that I realised that Safari 5 isn't considered a browser that supports inline SVG. SO we dropped support for it and went back to serving HTML5 instead. You live and learn.</p> 

    </section><!-- .box_page -->    
    <footer class="box_footer">
        <p>HTTPflies is a joint project by <a href="http://twitter.com/morganesque">Tom Morgan</a> and <a href="http://twitter.com/DeanVipond">Dean Vipond</a></p>
        <p>You can go back to <a href="/">HTTPflies</a> if you want.</p>
        <p class="small">Copyright &copy; 2013</p>
        <div class="logo"><?php include('./svg/logo.svg'); ?></div>
    </footer>
<script>
<?php if ($xml) echo '<![CDATA['."\n"; ?>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-20506545-6', 'httpflies.com');
  ga('send', 'pageview');
<?php if ($xml) echo ']]>'."\n"; ?>
</script>
</body>
</html>