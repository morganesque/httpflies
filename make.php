#!/usr/bin/php
<?php

$contents = file_get_contents('http://www.httpflies.tom/');
file_put_contents('indexflat.html', $contents);

$contents = file_get_contents('http://www.httpflies.tom/writeup.php');
file_put_contents('writeupflat.html', $contents);

?>
