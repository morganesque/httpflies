<?php // header('Content-Type: image/svg+xml'); ?>
<?php // echo '<?xml version="1.0" encoding="utf-8"?'.'>'; ?>
<?php // <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> ?>
<svg 
    id="original"
    version="1.0" 
    viewBox="0 0 340 290" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="xMidYMin meet"
    >
    <defs>
        <linearGradient class="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
        </linearGradient>
    </defs>

    <g class="butterfly">
    <?php include ('all-the-wings.svg'); ?>
    </g>

</svg>