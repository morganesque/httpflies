#!/usr/bin/php
<?php

$contents = file_get_contents('http://www.httpflies.tom/');
file_put_contents('../index.html', $contents);

$contents = file_get_contents('http://www.httpflies.tom/writeup.php');
file_put_contents('../writeup.html', $contents);

?>
