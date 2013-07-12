<?php // header('Content-Type: image/svg+xml'); ?>
<?php // echo '<?xml version="1.0" encoding="utf-8"?'.'>'; ?>
<?php // <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> ?>
<?php /*

*/ ?>
<svg
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
    id="original"
    version="1.0" 
    viewBox="0 0 414 340" 
    preserveAspectRatio="xMidYMid meet"    
    >
    <defs>
        <linearGradient class="back-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1"></stop>
            <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1"></stop>
        </linearGradient>
        <linearGradient class="wing-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1"></stop>
            <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1"></stop>
        </linearGradient>
        <linearGradient class="body-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1"></stop>
            <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1"></stop>
        </linearGradient>
    </defs>

    <g class="butterfly" transform="translate(0 0)">
    <?php include ('all-the-wings.svg'); ?>
    </g>

    <rect class="debug" x="0" y="0" width="100%" height="100%" fill="none" stroke="black"/>  

</svg>