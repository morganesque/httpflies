<?php
if (true): // xml
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
    <meta name="description" content="A Miscellany Of Http Response Codes" />	
    <meta name="google-site-verification" content="" />
    <meta name="author" content="Tom Morgan &amp; Dean Vipond" />
    <meta name="Copyright" content="Copyright Tom Morgan 2011. All Rights Reserved." />
    <meta name="DC.title" content="HTTPFlies" />
    <meta name="DC.creator" content="Tom Morgan &amp; Dean Vipond" />    
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />    
    <meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <link rel="apple-touch-icon" href="icons/apple-touch-icon.png" />
    <link rel="image_src" href="" />
    <link rel="shortcut icon" href="favicon.ico" />
    <?php include('google-fonts.php'); ?>
    <style type="text/css">
    <![CDATA[
    body {font-family: 'Lato', Georgia, Arial, sans-serif;}
    <?php include('css/style.css'); ?>
    ]]>
    </style>
    <?php /* <script src="js/modernizr.js" type="text/javascript" charset="utf-8"></script> */ ?>
</head>
<body>       
    <header class="box_header">
        <?php /* <div class="logo"><a href="#" id="index-link"><?php include('./svg/logo.svg'); ?></a></div> */ ?>
        <div class="logo"><?php include('./svg/logo.svg'); ?></div>
        <h1 class="beta large-text">httpflies</h1>
        <hr class="line"/>
        <p class="sub">A Miscellany Of <span class="nw">Http Response Codes</span></p>
    </header>          
    <section class="box_page">   

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
                <a href="#" class="button left"><div class="arrow" /></a>
                <a href="#" class="button right"><div class="arrow" /></a>
            </div><!-- .box_arrows -->
            <div class="box_case">
                <div class="box_httpfly">
                    <div class="inner">
                        <a href="#" class="barnum"><div class="cross"></div></a>
                    </div><!-- .inner -->
                </div><!-- .box_httpfly --><!-- 
             --><div class="box_details">
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
        <p>Httpflies is a joint project by <a href="http://twitter.com/morganesque">Tom Morgan</a> and <a href="http://twitter.com/DeanVipond">Dean Vipond</a></p>
        <p><a href="">Read about how we made Httpflies</a></p>
        <p class="small">Copyright &copy; 2013</p>
        <div class="logo"><?php include('./svg/logo.svg'); ?></div>
    </footer>

    <div class="tester"><?php include('svg/svg.php'); ?></div>

<script type="text/javascript">
<![CDATA[
    <?php include('js/data.php'); ?>
    <?php include('js/all.min.js'); ?>
]]>
</script>
<script>
<![CDATA[
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-20506545-6', 'httpflies.com');
  ga('send', 'pageview');
]]>
</script>
</body>
</html>