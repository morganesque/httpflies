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
    <meta name="title" content="HTTPFlies" />
    <meta name="description" content="A Miscellany Of Http Status Codes" />	
    <meta name="google-site-verification" content="" />
    <meta name="author" content="Tom Morgan &amp; Dean Vipond" />
    <meta name="Copyright" content="Copyright Tom Morgan 2011. All Rights Reserved." />
    <meta name="DC.title" content="HTTPFlies" />
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
    <?php include('css/style.css'); ?>
    <?php if ($xml) echo ']]>'."\n"; ?>
    </style>
    <script type="text/javascript" charset="utf-8"><?php include('js/modernizr.js'); ?></script>
</head>
<body>       
    <header class="box_header">
        <?php /* <div class="logo"><a href="#" id="index-link"><?php include('./svg/logo.svg'); ?></a></div> */ ?>
        <div class="logo"><?php include('./svg/logo.svg'); ?></div>
        <h1 class="beta large-text">httpflies</h1>
        <hr class="line"/>
        <p class="sub">A Miscellany Of <span class="nw">HTTP Status Codes</span></p>
    </header>          
    <section class="box_page">  

        <noscript>
        <div class="box_nojs">
            <h1>No JavaScript! Really?</h1>
            <p>This is just a fun little experiment and you need JavaScript to view it. JavaScript does the whole thing. Without JavaScript literally nothing happens. That's kind of the point. Sorry :-(</p>
            <p>&nbsp;</p>
            <p>Tom &amp; Dean</p>
        </div>
        </noscript>

        <div class="box_sorry">
            <h1>Ouch! Sorry...</h1>
            <p>This is just a little experiment using a few bits of web technology not all browsers support. We're using <a href="http://modernizr.com/">Modernizr</a> to check whether your browser can support "inline SVG" and  it looks like it can't. There are <a href="http://caniuse.com/#search=inline%20svg">many browsers out there</a> now which you can use to view this site so why not give one of them a try and come back soon.</p>
            <p>&nbsp;</p>
            <p>Tom &amp; Dean</p>
        </div> 

        <div class="box_index">
            <div class="box_httpfly" id="starter">
                <div class="inner">
                    <a href="#" class="barnum">                        
                        <div class="label beta"><p>404</p></div>
                        <div class="cross"></div>
                    </a>                                
                </div><!-- .inner -->
            </div><!-- .box_httpfly -->                  
        </div><!-- .index -->  

        <div class="box_case_container">
            <div class="box_arrows">
                <a href="#" class="button left"><div class="arrow"></div></a>
                <a href="#" class="button right"><div class="arrow"></div></a>
            </div><!-- .box_arrows -->
            <div class="box_case">
                <div class="box_httpfly">
                    <div class="inner">
                        <a href="#" class="barnum"><div class="cross"></div></a>
                    </div><!-- .inner -->
                </div><!-- .box_httpfly --><!-- 
             --><div class="box_details" id="details">
                    <div class="inner">
                        <div class="label beta large-text"><p>404</p></div>
                        <div class="name">Partial Content</div>
                        <div class="latin">Partialium Contentius</div>
                        <hr class="line"/>
                        <a href="#" class="tweet-this" target="_blank">
                            <div class="twitter-icon"><?php include ('svg/twitter.svg'); ?></div>
                            Tweet this Httpfly
                        </a>
                        <p class="desc">The request has been accepted for processing, but the processing has not been completed. The request might or might not eventually be acted upon, as it might be disallowed when processing actually takes place.</p>
                    </div><!-- .inner -->
                </div><!-- .box_details -->            
            </div><!-- .box_case -->            
        </div><!-- .box_case_container -->

    </section><!-- .box_page -->    

    <footer class="box_footer">
        <p>HTTPflies is a joint project by <a href="http://twitter.com/morganesque">Tom Morgan</a> and <a href="http://twitter.com/DeanVipond">Dean Vipond</a></p>
        <p><a href="/writeup.php">Read about how we made HTTPflies</a></p>
        <p class="small">Copyright &copy; 2013</p>
        <div class="logo"><?php include('./svg/logo.svg'); ?></div>
    </footer>

    <div class="tester"><?php include('svg/svg.php'); ?></div>

<script type="text/javascript">
<?php if ($xml) echo '<![CDATA['."\n"; ?>
    <?php include('js/data.php'); ?>
    <?php include('js/all.min.js'); ?>
<?php if ($xml) echo ']]>'."\n"; ?>
</script>
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