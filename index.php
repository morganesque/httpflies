<!DOCTYPE html>
<!--[if lt IE 7 ]> <html class="ie ie6 no-js"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie ie7 no-js"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie ie8 no-js"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie ie9 no-js"> <![endif]-->
<!--[if gt IE 9]><!--><html class="no-js"><!--<![endif]-->
<head id="httpflies-head">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>HTTPFlies</title>
    <meta name="title" content="Page Title">
    <meta name="description" content="">	
    <meta name="google-site-verification" content="">
    <meta name="author" content="Tom Morgan">
    <meta name="Copyright" content="Copyright Tom Morgan 2011. All Rights Reserved.">
    <meta name="DC.title" content="">
    <meta name="DC.subject" content="">
    <meta name="DC.creator" content="Tom Morgan">    
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">    
    <meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <link rel="apple-touch-icon" href="icons/apple-touch-icon.png"><!-- 72x72 -->
    <link rel="image_src" href=""><!-- facebook thumbnail -->
    <link rel="shortcut icon" href="favicon.ico">
    <script type="text/javascript" src="//use.typekit.net/muk6swr.js"></script>
    <script type="text/javascript">try{Typekit.load();}catch(e){}</script>    
    <link rel="stylesheet" live="true" href="css/style.css" type="text/css" media="screen" title="The Styles" charset="utf-8">    
    <?php /* <script src="js/modernizr.js" type="text/javascript" charset="utf-8"></script> */ ?>
</head>
<body>  
    <div class="page">
        <header class="header">
            <div class="logo">
                <div class="col"></div>
                <div class="svg"></div>
            </div>
            <h1 class="beta">httpflies</h1>
            <hr class="line"/>
            <p class="sub">A Miscellany Of Http Error Codes</p>
        </header>
    </div><!-- .page -->    

    <section class="container">
    <?php
        for ($i=0; $i < 20; $i++) { 
            echo '<div class="box">';
            echo '<div class="barnum"></div>';
            echo '</div>';
        }
    ?>
    </section><!-- .container -->

    <div class="tester"><?php include('svg/svg.php'); ?></div>

<script src="js/lib/jquery-1.10.1.js" type="text/javascript" charset="utf-8"></script>
<script src="js/lib/jquery.svg.js" type="text/javascript" charset="utf-8"></script>
<script src="js/lib/jquery.svgdom.js" type="text/javascript" charset="utf-8"></script>
<script src="js/lib/colors.js" type="text/javascript" charset="utf-8"></script>
<script src="js/all.min.js" type="text/javascript" charset="utf-8"></script>
<script src="js/page.js" type="text/javascript" charset="utf-8"></script>

<?php /*
<script>
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-REPLACE-THIS']);
_gaq.push(['_trackPageview']);
(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protoCol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
</script>

<!--[if (lt IE 9) & (!IEMobile)]>
<script src="js/ie/DOMAssistantCompressed-2.8.js"></script>
<script src="js/ie/selectivizr-1.0.1.js"></script>
<script src="js/ie/respond.min.js"></script>
<![endif]-->

<!-- transparent PNG -->
<!--[if IE 6]>
<script src="js/ie/dd_belatedpng.js"></script>
<script>
  DD_belatedPNG.fix('img');
</script>
<![endif]-->
*/ ?>

</body>
</html>